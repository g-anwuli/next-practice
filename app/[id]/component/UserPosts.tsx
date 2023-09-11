import React from "react";
import Image from "next/image";

type Prop = {
  promise: Promise<{ data: Post[] }>;
};

async function UserPosts({ promise }: Prop) {
  const { data } = await promise;
  const content = data.map((post) => (
    <div
      key={post.id}
      className="border p-3.5 lg:p-5 rounded-lg space-y-5 shadow-md w-full"
    >
      <Image
        src={`https://robohash.org/${post.title}`}
        alt="user pic"
        className="rounded-md bg-neutral-400 max-w-full max-h-[350px] border object-contain"
        width={1000}
        height={1000}
        loading="lazy"
      />
      <div className="font-light tracking-wider leading-relaxed">
        {post.title}
      </div>
    </div>
  ));
  return <div className="space-y-5 flex-1">{content}</div>;
}

export default UserPosts;
