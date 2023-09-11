import React from "react";
import Image from "next/image";

type Prop = {
  promise: Promise<UserType>;
};

async function UserComponent({ promise }: Prop) {
  const data = await promise;
  return (
    <div className="border p-4 sm:p-5 rounded-lg max-w-sm space-y-3 shadow-md h-max md:sticky top-[60px]">
      <Image
        src={`https://robohash.org/${data.name}`}
        alt="user pic"
        className="rounded-md bg-neutral-400 max-w-full aspect-square border"
        width={400}
        height={400}
        priority
      />
      <div>Name: {data.name}</div>
      <div>Username: {data.username}</div>
      <div>Email: {data.email}</div>
      <div>Phone Number: {data.phone}</div>
      <div>Website: {data.website}</div>
    </div>
  );
}

export default UserComponent;
