import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { BsArrowDown } from "react-icons/bs";
import OurProduct from "@/components/OurProduct";
import PenggunaGigi from "@/components/PenggunaGigi";
import Keunggulan from "@/components/Keunggulan";
import OurBlog from "@/components/OurBlog";
import Team from "@/components/Team";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`overflow-hidden ${inter.className}`}>
      <div className="relative h-[95vh] bg-kakao">
        <div className="text-white grid place-content-center gap-y-3 h-[70vh] text-center">
          <div>
            <h1 className="font-bold text-3xl">Kamidancer</h1>
            <p className="text-[14px]">
              PEMBERSIH GIGI TIRUAN DARI BAHAN ALAMI?
            </p>
          </div>
          <Link
            href="#product"
            className="flex justify-center bouncing-arrow cursor-pointer"
          >
            <BsArrowDown className="" size={24} />
          </Link>
        </div>
        <div className="bg-kertas absolute z-[0] bottom-[-5%] lg:bottom-0 w-full h-[10vh]" />
      </div>
      <OurProduct />
      <PenggunaGigi />
      <Keunggulan />
      <OurBlog />
      <Team />
      <Footer />
    </main>
  );
}
