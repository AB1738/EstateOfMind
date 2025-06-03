import Link from "next/link";

export default async function Home() {
  return (
    <div className=" p-3 sm:max-w-7xl mx-auto flex flex-col gap-2">
      <h1 className="text-3xl font-bold">Home Page</h1>
      <Link
        href="/properties"
        className="rounded text-white bg-black p-3 hover:scale-101 text-center w-fit self-center"
      >
        View Properties
      </Link>
    </div>
  );
}
