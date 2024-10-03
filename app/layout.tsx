import "@styles/global.scss";
import { Gowun_Dodum } from "next/font/google";

export const metadata = {
  title: "우리 결혼해요",
  description: "모바일 청첩장 토이 프로젝트입니다.",
};

const gowunDodam = Gowun_Dodum({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={gowunDodam.className}>{children}</body>
    </html>
  );
}
