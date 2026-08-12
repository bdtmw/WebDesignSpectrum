
import "./globals.css";
import "../css/style.css";
import "../css/plugin.css";
import "../css/responsive.css";
import { Open_Sans, Poppins } from "next/font/google";
import Footer from "@/components/layout/Footer/Footer";
import Header from "@/components/layout/Header/Header";
import AOSProvider from "@/components/hooks/AOSProvider";
import { Toaster } from "react-hot-toast";
import Script from "next/script";


const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});



export default function RootLayout({ children }) {

  return (
    <html
      lang="en"
      className={`${openSans.variable} ${poppins.variable}`}
    >
      <head>
    <Script
    src="https://www.googletagmanager.com/gtag/js?id=G-7157JGNQ3C"
    strategy="afterInteractive"
/>

<Script id="google-analytics" strategy="afterInteractive">
    {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){window.dataLayer.push(arguments);}
        window.gtag = gtag;

        gtag('js', new Date());
        gtag('config', 'G-7157JGNQ3C');
    `}
</Script>
  </head>
    
      <body>
        <Header />
        <AOSProvider />

        <main>{children}</main>

        <Toaster
          position="top-right"
          reverseOrder={false}
          gutter={12}
          toastOptions={{
            duration: 3000,
            style: {
              background: "#fff",
              color: "#222",
              borderRadius: "12px",
              padding: "16px",
              boxShadow: "0 10px 30px rgba(0,0,0,.15)",
            },
            success: {
              iconTheme: {
                primary: "#16a34a",
                secondary: "#fff",
              },
            },
            error: {
              iconTheme: {
                primary: "#dc2626",
                secondary: "#fff",
              },
            },
          }}
        />

        <Footer />
      </body>

    </html>
  );
}
