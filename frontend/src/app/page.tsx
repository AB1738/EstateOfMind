import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  return (
    <div className=" mx-auto flex flex-col gap-2 relative">
      <div className="w-full h-full absolute z-10 bg-black/45"></div>
      <Image
        height={1000}
        width={1000}
        alt="Property Image"
        src={
          "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        className=" h-screen object-cover w-full"
      />
      <div className="flex flex-col lg:flex-row gap-2 absolute z-20 h-full">
        <Image
          height={1200}
          width={1200}
          alt="EstateOfMind Logo"
          src={"/img/mainlogo.png"}
          className=" w-2/5 sm:w-[25%] aspect-square lg:h-1/2 rounded-br-full bg-[#0d0d0c] "
        />
        <div className="flex flex-col items-center gap-3 text-white mt-7">
          <h1 className="text-2xl lg:text-3xl font-extrabold text-center">
            Find Your Perfect Property with EstateOfMind
          </h1>
          <p className="text-center font-semibold">
            Your trusted source for real estate property listings. Whether
            you’re buying, selling, or investing, we offer a comprehensive
            platform to help you find the perfect property with ease.
          </p>
          <p className="text-center font-semibold">
            At EstateOfMind, we make the search for your dream home or
            investment opportunity seamless and stress-free. With an expansive
            collection of listings, up-to-date market trends, and detailed
            property information, we empower you to make well-informed
            decisions.
          </p>
          <div className="hidden md:block text-center">
            <h3 className="text-xl font-bold pb-1.5">Why EstateOfMind?</h3>
            <ul>
              <li className="font-semibold text-xs md:text-base pb-1.5">
                <strong className="font-extrabold">
                  Browse a Wide Selection
                </strong>
                : View a variety of real estate listings for homes, apartments,
                and more.
              </li>
              <li className="font-semibold text-xs md:text-base pb-1.5">
                <strong className="font-extrabold">
                  Clear Property Details
                </strong>
                : Access detailed information and photos for each listing to
                help you make an informed choice.
              </li>
              <li className="font-semibold text-xs md:text-base">
                <strong className="font-extrabold">Up-to-Date Listings</strong>:
                See the latest properties available, updated regularly for the
                most current options.
              </li>
            </ul>
          </div>
          <Link
            href="/properties"
            className="rounded text-white font-semibold bg-black p-3 hover:scale-101 z-30 hover:bg-[#0b0b0b] text-center w-[95%] sm:w-2/5 self-center mt-0 md:mt-20 mb-1.5 transition-all duration-200"
          >
            View Properties
          </Link>
        </div>
      </div>
    </div>
  );
}
