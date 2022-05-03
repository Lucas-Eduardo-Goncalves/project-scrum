import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../services/firebase";

interface IHandleAddCard {
  card: number;
  userId: string;
  docId:  string;
}

interface IUsersInTheRoomProps {
  avatar: string;
  email: string;
  id: string;
  name: string;
  card: {
    selected: boolean;
    card: number;
  }
}

interface IFetchProps {
  usersInsideTheRoom: IUsersInTheRoomProps[]; 
}

export async function HandleAddCard({ card, docId, userId }: IHandleAddCard) {
  const myDocRef = doc(db, "rooms", docId);
  const docSnap = await getDoc(myDocRef);

  if (docSnap.exists()) {
    const { usersInsideTheRoom } = docSnap.data() as IFetchProps;
    const userAlreadyPost = usersInsideTheRoom.find((object: any) => object.id === userId);
    
    if(userAlreadyPost) {
      const arrayFilter = usersInsideTheRoom.filter(item => item.id !== userId);
      const newArray = [ ...arrayFilter, {
        avatar: userAlreadyPost.avatar,
        email: userAlreadyPost.email,
        id: userAlreadyPost.id,
        name: userAlreadyPost.name,
        card: {
          selected: true,
          card,
        }
      }]

      await updateDoc(myDocRef, {
        usersInsideTheRoom: newArray,
      })

      return;
    }
  }
}