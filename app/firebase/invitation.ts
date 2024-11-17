import { Invitation, Location } from "@types/invitation.module";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "@firebase/firebaseConfig";

export async function getInvitation(
  id: string
): Promise<{ invitation: Invitation; location: Location }> {
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const q = doc(db, "invitations", id);
  const docSnap = await getDoc(q);
  const storage = getStorage(app);

  if (docSnap.exists()) {
    const url = await getDownloadURL(
      ref(storage, docSnap.data().background_img_url)
    );

    const invitation = {
      id: q.id,
      ...docSnap.data(),
      background_img_url: url,
    } as Invitation;

    const locationQ = doc(db, "locations", invitation.location_id);
    const locationDocSnap = await getDoc(locationQ);

    const location = {
      id: locationQ.id,
      ...locationDocSnap.data(),
    } as Location;

    return {
      invitation: invitation,
      location: location,
    };
  } else {
    return {
      invitation: {
        id: 0,
        groom_name: "",
        bride_name: "",
        groom_dad_name: "",
        groom_mom_name: "",
        bride_dad_name: "",
        bride_mom_name: "",
        start_date: "",
        start_time: "",
        location_id: "",
        background_img_url: "",
      },
      location: {
        id: 0,
        title: "",
        detail: "",
        tel: "",
      },
    };
  }
}
