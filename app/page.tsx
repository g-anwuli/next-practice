import Image from "next/image";
import Link from "next/link";

const getUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data: UserType[] = await res.json();
  return data;
};

export default async function Home() {
  const data = await getUsers();

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
            src={`https://robohash.org/${user.name}`}
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
