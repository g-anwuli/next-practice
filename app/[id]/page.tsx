import axios from "axios";
import { Metadata } from "next/types";
import UserPosts from "./component/UserPosts";
import UserComponent from "./component/UserComponent";
import { Suspense } from "react";
import { Loading1, Loading2 } from "./component/loading";

const usersUrl = "https://jsonplaceholder.typicode.com/users/";
const postUrl = "https://jsonplaceholder.typicode.com/todos?userId=";

type Prop = { params: { id: string } };

export const generateMetadata = async ({ params }: Prop): Promise<Metadata> => {
  const { data }: { data: UserType } = await axios.get(usersUrl + params.id);
  return {
    title: data.name,
    description: `My name is ${data.name}, this is my email ${data.email}`,
    icons: { icon: `https://robohash.org/${data.name}` },
    openGraph: {
      title: data.name,
      description: `My name is ${data.name}, this is my email ${data.email}`,
      images: [`https://robohash.org/${data.name}`],
    },
  };
};

function User({ params }: Prop) {
  const userData: Promise<{ data: UserType }> = axios.get(usersUrl + params.id);
  const userPost: Promise<{ data: Post[] }> = axios.get(postUrl + params.id);

  return (
    <div className="flex flex-col md:flex-row w-full justify-between gap-20 lg:gap-40">
      <Suspense fallback={<Loading1 />}>
        <UserComponent promise={userData} />
      </Suspense>
      <Suspense fallback={<Loading2 />}>
        <UserPosts promise={userPost} />
      </Suspense>
    </div>
  );
}

export default User;
