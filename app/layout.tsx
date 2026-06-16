import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Footprint Lab",
  description: "A student-friendly homepage about the benefits and trade-offs of AI infrastructure."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
