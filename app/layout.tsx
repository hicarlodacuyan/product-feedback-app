import "../styles/globals.css";
import Header from "./Header";
import MobileFooter from "./MobileFooter";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body className="flex flex-col h-screen">
        <Header />
        <main className="flex-1 bg-gray-100">{children}</main>
        <MobileFooter />
      </body>
    </html>
  );
}
