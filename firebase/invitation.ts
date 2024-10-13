import { Invitation, Location } from "types/invitation.module";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "@firebase/firebaseConfig";

export async function getInvitation(id: string): Promise<Invitation> {
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const q = doc(db, "invitations", id);
  const docSnap = await getDoc(q);

  return {
    id: q.id,
    ...docSnap.data(),
  } as Invitation;
}
