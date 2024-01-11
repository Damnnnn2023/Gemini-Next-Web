/* eslint-disable @next/next/no-page-custom-font */
import "./styles/globals.scss";
import "./styles/markdown.scss";
import "./styles/highlight.scss";
import { getClientConfig } from "./config/client";
import { type Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Gemini Chat Pro - Your personal Gemini Pro Chat Bot",
  description:
    "Gemini-Next-Web is the best open source and free chat bot powered by Google Gemini Pro and Gemini Pro Vision models. You can use it to chat with texts and images. All the data are stored in local and there is no need to register an account.",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#151515" },
  ],
  appleWebApp: {
    title: "Gemini Chat Pro",
    statusBarStyle: "default",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="config" content={JSON.stringify(getClientConfig())} />
        <link rel="manifest" href="/site.webmanifest"></link>
        <script src="/serviceWorkerRegister.js" defer></script>
        <script
          async
          src="https://umami.fre123.com/script.js"
          data-website-id="7f5029ff-efc6-44f7-bbec-ac10bdc2a54f"
        ></script>

        {/* <Script src="https://www.googletagmanager.com/gtag/js?id=G-78D99B4H78" />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
  
            gtag('config', 'G-78D99B4H78');
          `}
        </Script> */}
      </head>
      <body>{children}</body>
    </html>
  );
}
