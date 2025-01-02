import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "EpiGreenVision",
  description:
    "Research & Innovation in Conversion of Municipal solid waste MSW to Hydrogen H, CO2 Capture and Valorization, Biofuel Technologies, Plasma applications, Photonics, and Renewables Energy Business Development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rubik} antialiased`}>
        <Toaster
          position="top-right"
          toastOptions={{
            classNames: {
              error: "bg-red-500",
              success: "text-green-500",
            },
          }}
        />

        {children}
      </body>
    </html>
  );
}
