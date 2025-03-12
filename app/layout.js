import "./styles/globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Floating Kites Background
        <div className="kite-container">
          {/* Multiple Kite divs */}
          {/* <div className="kite"></div>
          <div className="kite"></div>
          <div className="kite"></div>
          <div className="kite"></div>
          <div className="kite"></div>
          <div className="kite"></div>
          <div className="kite"></div>
          <div className="kite"></div>
          <div className="kite"></div>
          <div className="kite"></div>
          <div className="kite"></div>
          <div className="kite"></div>
          <div className="kite"></div>
          <div className="kite"></div>
          <div className="kite"></div>
          <div className="kite"></div>
          <div className="kite"></div>
        </div> */} 

        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
