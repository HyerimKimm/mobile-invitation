import { Invitation, Location } from "types/invitation.module";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "@firebase/firebaseConfig";

export async function getInvitation(
  id: string
): Promise<{ invitation: Invitation; location: Location }> {
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const q = doc(db, "invitations", id);
  const docSnap = await getDoc(q);

  const invitation = {
    id: q.id,
    ...docSnap.data(),
  } as Invitation;

  const locationQ = doc(db, "locations", invitation.location_id);
  const locationDocSnap = await getDoc(locationQ);

  const location = {
    id: locationQ.id,
    ...locationDocSnap.data(),
  } as Location;

  console.log(location);

  return {
    invitation: invitation,
    location: location,
  };
}
