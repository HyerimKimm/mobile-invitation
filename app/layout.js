import "./globals.css";

export const metadata = {
  title: "혜림이의 청첩장 에이전시",
  description: "혜림이의 청첩장 에이전시 프로젝트입니다.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
