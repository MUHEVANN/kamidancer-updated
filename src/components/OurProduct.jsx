import Image from "next/image";
import React from "react";
import product from "@/image/product.png";
const OurProduct = () => {
  return (
    <div className="h-auto relative " id="product">
      <h1 className="text-center header mt-[40px]">OurProduct</h1>
      <div className="flex flex-col-reverse lg:flex-row items-center paddings z-20">
        <div className="flex-1">
          <p>
            Produk Kamidancer merupakan singkatan dari kata Kakao, UMI
            (Universitas Muslim Indonesia) dan denture cleanser yang artinya
            pembersih gigi tiruan. Nama Kamidancer terinspirasi dari kata dancer
            yang artinya “menari”, sesuai dengan kegunaan produk kami, “menari
            membersihkan seluruh plak, bakteri, dan jamur pada gigi tiruan
            Anda”. Komposisi Kamidancer ialah ekstrak kulit kakao, asam tartart,
            asam sitrat, PVP K-30, aquades dan natrium bikarbonat yang mampu
            menghambat pertumbuhan bakteri streptococcus mutans dan jamur
            candida albicans sehingga mencegah denture stomatitits dan berbagai
            penyakit akibat ketidakmampaun merawat gigi tiruan.
          </p>
        </div>
        <div className="flex-1">
          <Image
            src={product}
            alt="kamidancer-product"
            className="md:w-[300px] lg:w-full"
          />
        </div>
      </div>
      <span className="kulit-kakao hidden absolute right-0 top-[180px] w-[300px] h-[550px] z-10" />
      <span className="kakao-full absolute hidden md:left-[-15%] top-[40%] w-full h-[550px] z-10" />
    </div>
  );
};

export default OurProduct;
