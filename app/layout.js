// "use client";
import Nav from "@components/Nav";
import "@styles/globals.css";
import { Providers } from "./providers";
import SessionProvider from "@components/Provider";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI Prompts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light">
      <body>
        <SessionProvider>
          <Providers>
            <div className="main">
              <div className="gradient" />
            </div>
            <main className="app">
              <Toaster reverseOrder={false} />
              <Nav />
              {children}
            </main>
          </Providers>
        </SessionProvider>
      </body>
    </html>
  );
}
