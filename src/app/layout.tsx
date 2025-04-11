import type { Metadata } from "next";
import { Fjalla_One } from "next/font/google";
import "./globals.css";

const fjallaOne = Fjalla_One({
  weight: '400',
  subsets: ["latin"],
  variable: "--font-fjalla-one",
});

export const metadata: Metadata = {
  title: "FarmerBasket",
  description: "Fresh from the farm to your table",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fjallaOne.variable} font-fjalla antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
