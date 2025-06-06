"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Arizonia } from "next/font/google";

const arizonia = Arizonia({
  subsets: ["latin"],
  weight: "400",
});
const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className=" h-20 w-full  bg-[#0d0d0c]">
      <nav className="h-full w-full relative flex items-center justify-center gap-2">
        <Link href={"/"}>
          <Image
            height={1000}
            width={1000}
            alt="Nav logo"
            src={"/img/navlogo.png"}
            className="absolute left-0 top-0 h-full w-20"
          />
        </Link>
        <Link
          href="/"
          className={`text-2xl sm:text-5xl font-bold text-white ${arizonia.className} `}
        >
          EstateOfMind
        </Link>
        <Link
          href="/properties"
          className={`text-xs sm:text-sm md:text-base font-bold ${
            pathname === "/properties" ? "text-white" : "text-stone-300"
          } hover:text-white absolute right-5  `}
        >
          Properties
        </Link>
      </nav>
    </header>
  );
};
export default Navbar;
