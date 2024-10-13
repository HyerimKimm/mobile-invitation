import classes from "@app/page.module.scss";

import { getInvitation } from "@firebase/invitation";
import { Invitation } from "types/invitation.module";

export default async function Home() {
  const data: Invitation = await getInvitation("1");

  console.log(data);

  return (
    <main className={classes.page_wrapper}>
      안녕하세요, 모바일 청첩장 프로젝트입니다.
    </main>
  );
}
