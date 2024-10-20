import classes from "@app/page.module.scss";
import Link from "next/link";

export default async function Home() {
  return (
    <main className={classes.page_wrapper}>
      안녕하세요, 모바일 청첩장 프로젝트입니다.
      <Link href={`/1`}>청첩장 보기</Link>
    </main>
  );
}
