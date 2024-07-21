import { Inter } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.css'
import { Header } from "@/Header/Header";
import { Menu } from "@/Menu/Menu";
import { Footer } from "@/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });
const menuItems=[
  {
    id:'home',
    path:'home',
    text:'Home'
  },
  {
    id:'about',
    path:'about',
    text:'About'
  },
  {
    id:'contact',
    path:'contact',
    text:'Contact'
  },
  {
    id:'count',
    path:'count',
    text:'Count'
  },
  {
    id:'photos',
    path:'photos',
    text:'Photos'
  }
]

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <Menu menuItems={menuItems}/>
        {children}
        <Footer />
        </body>
      
    </html>
  );
}
