import { Metadata } from "next/types";
import UserPosts from "./component/UserPosts";
import UserComponent from "./component/UserComponent";
import { Suspense } from "react";
import { Loading1, Loading2 } from "./component/loading";

const usersUrl = "https://jsonplaceholder.typicode.com/users/";
const postUrl = "https://jsonplaceholder.typicode.com/todos?userId=";

type Prop = { params: { id: string } };

const getUser = async (id: string) => {
  const res = await fetch(usersUrl + id);
  const data: UserType = await res.json();
  return data;
};

const getPosts = async (id: string) => {
  const res = await fetch(postUrl + id);
  const data: Post[] = await res.json();
  return data;
};

export const generateMetadata = async ({ params }: Prop): Promise<Metadata> => {
  const data = await getUser(params.id);

  return {
    metadataBase: new URL('https://next-practicee.netlify.app/'),
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

export async function generateStaticParams() {
  const posts = await fetch(usersUrl).then((res) => res.json())
 
  return posts.map((post:Record<string,any>) => ({
    id: `${post.id}`,
  }))
}

function User({ params }: Prop) {
  const userData = getUser(params.id);
  const userPost = getPosts(params.id);

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
