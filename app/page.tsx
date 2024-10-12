import classes from "@app/page.module.scss";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDXb2I-hFMo0HPGM4YTHAWs3lU-T28rCDQ",
  authDomain: "mobileinvitation-5840a.firebaseapp.com",
  projectId: "mobileinvitation-5840a",
  storageBucket: "mobileinvitation-5840a.appspot.com",
  messagingSenderId: "523966684809",
  appId: "1:523966684809:web:60d7e38b36a3fb2d30f058",
  measurementId: "G-C23L8PLRX3",
};

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
