import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../services/firebase";

interface IHandleViewCard {
  userId: string;
  docId:  string;
  viewCard: boolean;
}

interface IRoomInfoProps {
  createdAt: string;
  name: string;
  viewCard: boolean;
}

interface IFetchProps {
  roomInfo: IRoomInfoProps; 
}

export async function HandleViewCard({ docId, viewCard }: IHandleViewCard) {
  const myDocRef = doc(db, "rooms", docId);
  const docSnap = await getDoc(myDocRef);

  if (docSnap.exists()) {
    const { roomInfo } = docSnap.data() as IFetchProps;

    await updateDoc(myDocRef, {
      roomInfo: {
        createdAt: roomInfo.createdAt,
        name: roomInfo.name,
        viewCard: viewCard
      }
    })
  }
}