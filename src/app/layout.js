import Approach from "@/components/Approach/Approach";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Faq from "@/components/Faq/Faq";
import CallToAction from "@/components/CallToAction/CallToAction";
import ScrollToTop from "@/components/ScrollToTop.js/ScrollToTop";

export default function RootLayout({ children }) {
  return (
    <html lang="uk">
      <body className="min-h-screen text-white antialiased flex flex-col justify-between relative overflow-x-hidden">
        <div
          className="fixed inset-0 w-full h-full pointer-events-none z-0 bg-cover bg-center mix-blend-multiply opacity-25 blur-xs"
          style={{ backgroundImage: 'url("/pap.png")' }}
        />

        <div className="relative z-10 flex flex-col justify-between min-h-screen w-full">
          <Header />
          <main className="flex-grow">{children}</main>
          {/* <Approach />
          <Faq />
          <CallToAction />
          <ScrollToTop /> */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
