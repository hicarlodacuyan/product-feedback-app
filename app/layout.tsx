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
      <body className="flex flex-col bg-gray-100">
        <Header />
        <main>{children}</main>
        <MobileFooter />
      </body>
    </html>
  );
}
