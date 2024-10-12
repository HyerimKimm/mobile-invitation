import classes from "@app/page.module.scss";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

import { firebaseConfig } from "@firebase/firebaseConfig";

export default async function Home() {
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const querySnapshot = await getDocs(collection(db, "invitations"));

  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
  });

  return (
    <main className={classes.page_wrapper}>
      안녕하세요, 모바일 청첩장 프로젝트입니다.
    </main>
  );
}
