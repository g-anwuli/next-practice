import axios from "axios";
import { Metadata } from "next/types";
import { Suspense } from "react";
import UserPosts from "./component/UserPosts";
import UserComponent from "./component/UserComponent";
import { Loading2 } from "./component/loading";

const usersUrl = "https://jsonplaceholder.typicode.com/users/";
const postUrl = "https://jsonplaceholder.typicode.com/todos?userId=";

type Prop = { params: { id: string } };

export const metadata: Metadata = {
  title: "user",
  description: "A page about a user",
};

async function User({ params }: Prop) {
  const { data }: { data: UserType } = await axios.get(usersUrl + params.id);
  const userPost: Promise<{ data: Post[] }> = axios.get(postUrl + params.id);

  return (
    <div className="flex flex-col md:flex-row w-full justify-between gap-20 lg:gap-40">
      <UserComponent data={data} />
      <Suspense fallback={<Loading2 />}>
        <UserPosts promise={userPost} />
      </Suspense>
    </div>
  );
}

export default User;
