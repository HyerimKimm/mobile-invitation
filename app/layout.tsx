import "@styles/global.scss";

export const metadata = {
  title: "우리 결혼해요",
  description: "모바일 청첩장 토이 프로젝트입니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
