import Link from "next/link";

const Navbar = () => {
  return (
    <header className="sticky top-0 h-20 w-full flex items-center justify-center gap-2">
      <nav>
        <Link href="/" className="text-3xl font-bold">
          EstateOfMind
        </Link>
      </nav>
    </header>
  );
};
export default Navbar;
