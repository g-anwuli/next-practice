import axios from "axios";
import Image from "next/image";
import Link from "next/link";

const usersUrl = "https://jsonplaceholder.typicode.com/users";
const photoUrl = "https://robohash.org/";

export default async function Home() {
  const { data } = await axios.get(usersUrl);
  console.log(data);
  
  return (
    <main className="space-y-2 flex-1 py-5">
      {data.map((user: any) => (
        <Link
          href={`/${user.id}`}
          key={user.name}
          className="p-5 border bg-black/10 w-max rounded flex gap-8 items-center"
        >
          {user.name}{" "}
          <Image
            src={photoUrl + user.name}
            alt="user pic"
            width={40}
            height={40}
            className="rounded bg-neutral-400"
            loading="lazy"
          />
        </Link>
      ))}
    </main>
  );
}
