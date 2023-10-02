import Image from "next/image";
import { notFound } from "next/navigation";
import { useRouter } from "next/router";
import React from "react";

const DetailBlog = ({ posts, error }) => {
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (!posts.data) {
    return <div>notfound</div>;
  }

  const { data } = posts;
  return (
    <div className=" mt-[80px]">
      <div className="w-[100%] h-[300px]">
        <Image
          src={`http://127.0.0.1:8000/storage/${data.thumbnail}`}
          className="w-full h-full object-cover bg-center"
          width={1400}
          height={300}
        />
      </div>
      <div className="bg-[#f5f5f5] h-screen">
        <div className="h-full bg-white mx-[350px] p-5">
          <h1 className="font-bold text-xl text-center mb-3 capitalize">
            {data.title}
          </h1>
          <div
            dangerouslySetInnerHTML={{
              __html: data.description,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default DetailBlog;

export async function getServerSideProps({ query }) {
  try {
    const res = await fetch(`http://127.0.0.1:8000/api/posts/${query.id}`);
    const posts = await res.json();

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    return { props: { posts, error: null } };
  } catch (error) {
    return { props: { posts: null, error } };
  }
}
