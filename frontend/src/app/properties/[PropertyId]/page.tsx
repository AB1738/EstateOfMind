import { getProperty } from "@/lib/getProperty";
import Image from "next/image";
import { redirect } from "next/navigation";
import { MapPin, Bed, Bath } from "lucide-react";
import Map from "@/components/customComponents/Map";
import RequestTourBtn from "@/components/customComponents/RequestTourBtn";

interface PropertyPageProps {
  params: { PropertyId: string };
}
const page = async ({ params }: PropertyPageProps) => {
  const { PropertyId } = await params;
  const property = await getProperty(PropertyId);
  if (!property) {
    redirect("/");
  }
  const address = `${property.address}, ${
    property.city === "New York" ? "Manhattan" : property.city
  }, ${property.state}`;
  const location = await fetch(
    `https://api.geocodify.com/v2/geocode?api_key=${process.env.GEOCODIFY_API_KEY}&q=${address}`,
    {
      cache: "force-cache",
    }
  );
  const locationData = await location.json();

  const bbox = locationData.response.bbox;

  const centerLng = (bbox[0] + bbox[2]) / 2;
  const centerLat = (bbox[1] + bbox[3]) / 2;

  return (
    <div className="p-3 ">
      <div className="flex flex-col md:flex-row w-full gap-1.5">
        <Image
          height={1000}
          width={1000}
          alt="Property image"
          src={property.imageUrl}
          className="w-full  md:w-[60%] lg:w-[70%]  h-full sm:h-screen"
        />
        <div className="flex flex-col gap-2 flex-1 items-center justify-between min-h-full  ">
          <h3 className="font-bold text-xl  sm:text-2xl  md:text-3xl text-center">
            {property.title}
          </h3>
          <div className="flex flex-col gap-2 pt-5 items-center">
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
          </div>
          <RequestTourBtn />
        </div>
      </div>
      <Map coordinates={[centerLng, centerLat]} />
    </div>
  );
};
export default page;
