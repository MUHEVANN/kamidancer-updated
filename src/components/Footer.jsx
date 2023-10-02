import Image from "next/image";
import React from "react";
import logo from "@/image/kamidancer-logo.svg";
import { FaWhatsapp, FaTiktok } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import shoppe from "@/image/shoppe.png";
import tokped from "@/image/tokped.png";

const Footer = () => {
  return (
    <div className="h-[300px] paddings bg-[#CFB5A7] mt-8">
      <div className="grid md:grid-cols-3 grid-cols-2 lg:grid-cols-4 items-center h-full text-center">
        <div className="cols-span-1 flex justify-center">
          <Image src={logo} />
        </div>
        <div className="cols-span-1 flex flex-col justify-center">
          <h1 className="font-bold">Contact</h1>
          <p>Prosthoderecleanser@gmail.com</p>
        </div>
        <div className="cols-span-1 flex flex-col justify-center">
          <h1 className="font-bold">Social Media</h1>
          <div className="flex justify-center gap-x-3">
            <FaTiktok size={20} />
            <BsInstagram size={20} />
            <FaWhatsapp size={20} />
          </div>
        </div>
        <div className="cols-span-1 flex flex-col justify-center">
          <h1 className="font-bold">Find Our Product</h1>
          <div className="flex items-center justify-center">
            <Image src={shoppe} alt="shoppe kamidancer" />
            <Image src={tokped} alt="toko-pedia-kamidancer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
