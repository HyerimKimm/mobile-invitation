import classes from "@app/page.module.scss";

import { getInvitation } from "@firebase/invitation";

export default async function Home() {
  const docSnap = getInvitation();

  console.log(JSON.stringify((await docSnap).data()));

  return (
    <main className={classes.page_wrapper}>
      안녕하세요, 모바일 청첩장 프로젝트입니다.
    </main>
  );
}
