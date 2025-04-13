import type { Metadata } from "next";
import { Fjalla_One } from "next/font/google";
import "./globals.css";
import LoadingScreen from "@/components/LoadingScreen";

const fjallaOne = Fjalla_One({
  weight: '400',
  subsets: ["latin"],
  variable: "--font-fjalla",
});

export const metadata: Metadata = {
  title: "FarmerBasket - Fresh from the Farm",
  description: "Your local source for fresh, sustainable produce directly from farmers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fjallaOne.variable} font-fjalla antialiased`}>
        <LoadingScreen />
        {children}
      </body>
    </html>
  );
}
