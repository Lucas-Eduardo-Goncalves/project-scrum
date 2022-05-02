import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../services/firebase";

interface IHandleAddCard {
  card: number;
  userId: string;
  docId:  string;
}

export async function HandleAddCard({ card, docId, userId }: IHandleAddCard) {
  const myDocRef = doc(db, "rooms", docId);
  const docSnap = await getDoc(myDocRef);

  if (docSnap.exists()) {
    const { cardSelected: latercardSelected } = docSnap.data();
    
    const userAlreadyPost = latercardSelected.find((object: any) => object.userId === userId);
    
    if(userAlreadyPost) {
      alert("Você já selecionou uma carta");
      return;
    }

    await updateDoc(myDocRef, {
      cardSelected: [...latercardSelected, {
        userId,
        card,
      }]
    });
  }
}