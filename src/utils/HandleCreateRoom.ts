import { User } from "firebase/auth";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { db } from "../services/firebase";

interface IHandleCreateRoomProps {
  roomName: string;
  user: User;
}

export async function HandleCreateRoom({ roomName, user }: IHandleCreateRoomProps): Promise<String> {
  const currentDate = new Date().toDateString();
  
  const docRef = await addDoc(collection(db, "rooms"), {
    roomInfo: {
      name: roomName,
      createdAt: currentDate,
      viewCard: false,
    },

    admin: {
      id: user.uid,
      name: user.displayName,
      email: user.email,
      avatar: user.photoURL
    },

    usersInsideTheRoom: [
      {
        name: user.displayName,
        email: user.email,
        avatar: user.photoURL,
        id: user.uid,
        card: {
          selected: false,
          card: 0,
        }
      }
    ]
  })

  return docRef.id;
}