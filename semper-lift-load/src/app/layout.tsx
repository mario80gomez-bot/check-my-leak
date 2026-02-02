import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Semper Lift & Load • Junk Removal | Bergen County, NJ",
  description:
    "Veteran Owned & Operated junk removal serving Bergen County, NJ. Fast, Reliable, Respectful Service. Request a free quote today.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
