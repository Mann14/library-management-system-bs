import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar1";
import Navbar1 from "./_components/Navbar";
import { NextUIProvider } from "@nextui-org/react";
import { AuthProvider } from "@/contexts/authContext";
// import '../../node_modules/bootstrap/dist/css/bootstrap.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export function Providers({children}) {
  return (
    <AuthProvider>
      <NextUIProvider>
        {children}
      </NextUIProvider>
    </AuthProvider>
  )
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navbar1 />
          {children}
        </Providers>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></script>
      </body>
    </html>
  );
}
