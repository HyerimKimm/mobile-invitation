import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>혜림이의 청첩장 에이전시!</h1>
      <ul>
        <li>
          <Link href={`/invite/1`}>청첩장 보기</Link>
        </li>
      </ul>
    </main>
  );
}
