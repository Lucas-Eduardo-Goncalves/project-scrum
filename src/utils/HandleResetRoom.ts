import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../services/firebase";

interface IHandleResetRoom {
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

interface IRoomInfoProps {
  createdAt: string;
  name: string;
  viewCard: boolean;
}

interface IFetchProps {
  roomInfo: IRoomInfoProps;
  usersInsideTheRoom: IUsersInTheRoomProps[]; 
}

export async function HandleResetRoom({ docId }: IHandleResetRoom) {
  const myDocRef = doc(db, "rooms", docId);
  const docSnap = await getDoc(myDocRef);

  if (docSnap.exists()) {
    const { roomInfo, usersInsideTheRoom } = docSnap.data() as IFetchProps;

    const clearCardsSelected = usersInsideTheRoom.map(object => {
      return {
        avatar: object.avatar,
        email: object.email,
        id: object.id,
        name: object.name,
        card: {
          selected: false,
          card: 0,
        }
      }
    })

    await updateDoc(myDocRef, {
      roomInfo: {
        createdAt: roomInfo.createdAt,
        name: roomInfo.name,
        viewCard: false,
      },

      usersInsideTheRoom: clearCardsSelected,
    })
  }
}