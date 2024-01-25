import Header from "@/components/Header";
import { Inter } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/SideBar";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Test",
  description: "beep boop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body className={`${inter.className} h-full`}>
      <div className="flex h-full w-full items-start">
        <div className="h-full w-1/4 min-w-50">
          <SideBar />
        </div>
        <div className="w-full h-full">
          <Header />
          <div className="h-full overflow-x-hidden bg-primary-gray-100">
            <main className="h-full">{children}</main>
          </div>
        </div>
      </div>
    </body>
  </html>
  );
}
