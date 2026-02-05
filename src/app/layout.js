import "./globals.css";
import Nav from "@/components/Nav";
import PageTransition from "@/components/PageTransition";
import ResumeButton from "@/components/ResumeButton";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata = {
  title: "Hemanth_Portfolio",
  description: "Hemanth Kumar - Data Analyst Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <div className="corner-icon icon-bottom-left">H</div>
        <ScrollToTop />
        <PageTransition>
          <Nav />
          <ResumeButton />
          {children}
        </PageTransition>
      </body>
    </html>
  );
}
