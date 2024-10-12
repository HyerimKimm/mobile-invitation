import classes from "@app/page.module.scss";
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc } from "firebase/firestore";

import { firebaseConfig } from "@firebase/firebaseConfig";

export default async function Home() {
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const q = doc(db, "invitations", "1");
  const docSnap = await getDoc(q);

  console.log(`${docSnap.id} => ${JSON.stringify(docSnap.data())}`);

  return (
    <main className={classes.page_wrapper}>
      안녕하세요, 모바일 청첩장 프로젝트입니다.
    </main>
  );
}
