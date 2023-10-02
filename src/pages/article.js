import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { BsArrowRight } from "react-icons/bs";
import Footer from "@/components/Footer";

const article = ({ posts }) => {
  const [query, setQuery] = useState("");
  const { data } = posts;
  console.log(data);
  const filteredData = data.filter((item) => {
    return item.title.toLowerCase().includes(query.toLowerCase());
  });
  const searchChange = (e) => {
    // e.preventDefault();
    setQuery(e.target.value);
  };
  return (
    <>
      {" "}
      <div className="mt-[80px] paddings">
        <div className="w-full flex justify-center">
          <div className="w-[50%] flex items-center justify-center relative">
            <input
              type="text"
              onChange={searchChange}
              className="outline-none border-2 focus:border-[#C79277] focus:shadow-md ease-in-out duration-300 px-4 py-2 rounded-full w-full"
              placeholder="Search"
            />
            <HiOutlineSearch
              className="absolute right-3 text-[#C79277]"
              size={24}
            />
          </div>
        </div>
        {/* result */}
        {query && (
          <div className="w-full flex justify-center relative">
            <div className="w-[50%] flex flex-col absolute gap-y-3 bg-white py-4 border px-4 shadow-lg">
              {filteredData.length === 0 ? (
                <p>
                  No result for <span className="font-bold">{query}</span>
                </p>
              ) : (
                filteredData.map((post) => (
                  <Link
                    href={`/article/${post.id}`}
                    key={post.id}
                    className="flex border-b py-2 flex-col"
                  >
                    <h1>{post.title}</h1>
                  </Link>
                ))
              )}
            </div>
          </div>
        )}
        <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 ">
          {data.map((post) => {
            return (
              <div className="p-5">
                <div className="w-[100%] h-[300px]">
                  <Image
                    src={`http://127.0.0.1:8000/storage/${post.thumbnail}`}
                    className="object-cover w-full h-[300px]"
                    alt={post.title}
                    layout=""
                    width={300}
                    height={300}
                  />
                </div>
                <div className="mt-3">
                  <h1 className="text-[#C79277] font-semibold capitalize text-[18px]">
                    {post.title}
                  </h1>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: post.description.slice(0, 80) + "...",
                    }}
                    className="text-[14px]"
                  ></div>
                  <div className="mt-2 font-semibold">
                    <Link
                      href={`/article/${post.id}`}
                      className="font-semibold text-[16px] flex items-center hover:gap-x-4 group ease-in-out duration-300 gap-x-2"
                    >
                      <span className="group-hover:underline">Read More</span>{" "}
                      <BsArrowRight size={20} />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default article;

export async function getServerSideProps() {
  const res = await fetch(`http://127.0.0.1:8000/api/posts`);
  const posts = await res.json();

  return { props: { posts } };
}
