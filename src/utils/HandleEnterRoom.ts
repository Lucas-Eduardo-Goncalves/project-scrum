import { User } from "firebase/auth";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../services/firebase";

interface IHandleEnterRoom {
  user: User;
  docId:  string;
  navigate: (event: string) => void;
}

export async function HandleEnterRoom({ docId, user, navigate }: IHandleEnterRoom) {
  

  try {
    const myDocRef = doc(db, "rooms", docId);
    const docSnap = await getDoc(myDocRef);

    if (docSnap.exists()) {
      const { usersInsideTheRoom } = docSnap.data();
      
      const userAlreadyPost = usersInsideTheRoom.find((object: any) => object.id === user.uid);
      
      if(userAlreadyPost) {
        navigate(`/room/${docId}`)
        return;
      } 
  
      await updateDoc(myDocRef, {
        usersInsideTheRoom: [...usersInsideTheRoom, {
          avatar: user.photoURL,
          email: user.email,
          id: user.uid,
          name: user.displayName,
        }]
      });
  
      navigate(`/room/${docId}`);
    }
  } catch(err) {
    alert(err)
  }
}