import React from "react";
import anggota1 from "@/image/anggota1.png";
import anggota2 from "@/image/anggota2.png";
import anggota3 from "@/image/anggota3.png";
import anggota4 from "@/image/anggota4.png";
import anggota5 from "@/image/anggota5.png";
import anggota6 from "@/image/anggota6.png";
import Image from "next/image";
const Team = () => {
  return (
    <div className="paddings mt-[80px]">
      <h1 className="header text-center mb-[35px]">Team</h1>
      <div className="grid grid-cols-3 gap-y-5">
        <div className="cols-span-1">
          <Image src={anggota1} />
        </div>
        <div className="cols-span-1">
          <Image src={anggota2} />
        </div>
        <div className="cols-span-1">
          <Image src={anggota3} />
        </div>
        <div className="cols-span-1">
          <Image src={anggota4} />
        </div>
        <div className="cols-span-1">
          <Image src={anggota5} />
        </div>
        <div className="cols-span-1">
          <Image src={anggota6} />
        </div>
      </div>
    </div>
  );
};

export default Team;
