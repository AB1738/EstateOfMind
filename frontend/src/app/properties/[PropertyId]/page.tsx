import { getProperty } from "@/lib/getProperty";
import Image from "next/image";
import { redirect } from "next/navigation";
import { MapPin, Bed, Bath, Navigation } from "lucide-react";

interface PropertyPageProps {
  params: { PropertyId: string };
}
const page = async ({ params }: PropertyPageProps) => {
  const { PropertyId } = await params;
  const property = await getProperty(PropertyId);
  if (!property) {
    redirect("/");
  }
  const address = `${property.address}, ${property.city}, ${property.state}`;
  // let lat1:number,lat2:number,long1:number,long2:number

  const location = await fetch(
    `https://api.geocodify.com/v2/geocode?api_key=${process.env.GEOCODIFY_API_KEY}&q=${address}`
  );
  const locationData = await location.json();
  const bbox = locationData.response.bbox;
  console.log(bbox);

  return (
    <div className="p-3 ">
      <div className="flex flex-col md:flex-row w-full gap-1.5">
        <Image
          height={1000}
          width={1000}
          alt="Property image"
          src={property.imageUrl}
          className="w-full md:w-[50%] h-full"
        />
        <div className="flex flex-col gap-2 flex-1 items-center justify-between min-h-full  ">
          <h3 className="font-bold text-xl  sm:text-2xl  md:text-3xl text-center">
            {property.title}
          </h3>
          <p className="text-center text-sm sm:text-base leading-7">
            {" "}
            {property.description}
          </p>
          <div className="flex gap-1.5 items-center">
            <MapPin size={16} />
            <div className="flex gap-1.5 text-center text-sm sm:text-base">
              <p>{property.address},</p>
              <p>{property.city},</p>
              <p>{property.state}</p>
            </div>
          </div>
          <p className="text-center text-sm sm:text-base flex items-center gap-1.5">
            <Bed size={16} /> {property.bedrooms} Bed
          </p>
          <p className="text-center text-sm sm:text-base flex items-center">
            <Bath size={16} />
            {property.bathrooms} Bath
          </p>
          <p className="text-center text-sm sm:text-base">
            {" "}
            {new Intl.NumberFormat().format(property.sqFt)} Sqft
          </p>
          <p className="text-center text-lg sm:text-xl font-semibold ">
            ${new Intl.NumberFormat().format(property.price)}
          </p>
          <button className="p-2 mt-auto bg-black hover:scale-101 shadow-md rounded cursor-pointer w-full transition-all duration-200 justify-self-end">
            <p className="flex gap-1 items-center justify-center font-semibold text-white">
              Request A Tour{" "}
              <MapPin size={18} className="animate-bounce duration-700" />
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};
export default page;
