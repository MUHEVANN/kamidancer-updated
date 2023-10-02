import Navbar from "@/components/Navbar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <main className="overflow-hidden">
        <Navbar />
        <Component {...pageProps} />
      </main>
    </>
  );
}
