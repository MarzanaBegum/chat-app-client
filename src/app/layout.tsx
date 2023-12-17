import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider/ThemeProvider";

export const metadata: Metadata = {
  title: "Chat App",
  description: "Real world chat application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <ThemeProvider>
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
