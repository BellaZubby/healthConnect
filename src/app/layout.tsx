import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar/navbar";
import { contactData, socialIcon, footerService } from "@/hook/data";
import Footer from "./components/footer";


export const metadata: Metadata = {
  title: "HealthConnect Telemedicine",
  description: "Remote Access to Quality Healthcare Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Navbar/>
        {children}
        <Footer
        contact={contactData}
        socials={socialIcon}
        service={footerService}
      />
      </body>
    </html>
  );
}
