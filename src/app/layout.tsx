import type { Metadata } from "next";
import "./globals.css";
import ReduxStore from "../../redux/ReduxStore";
import { Toaster } from "react-hot-toast";
import ThemeProviders from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Chat App",
  description: "Real world chat application",
  icons: {
    icon: [{ url: "/icons/live-chat.svg", href: "/icons/live-chat.svg" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Toaster position="top-right" reverseOrder={false} gutter={8} />
        <ReduxStore>
          <ThemeProviders>
            <main>{children}</main>
          </ThemeProviders>
        </ReduxStore>
      </body>
    </html>
  );
}
