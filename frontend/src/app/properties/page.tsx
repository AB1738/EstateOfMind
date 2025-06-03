import { Properties } from "@/types/PropertyTypes";
import Link from "next/link";

const page = async () => {
  const response = await fetch(`${process.env.BACKEND_BASE_URL}/api/Property/`);
  const properties: Properties = await response.json();
  console.log(properties);
  return (
    <div>
      {properties.map((property) => (
        <Link href={`/properties/${property.id}`} key={property.id}>
          <h1>{property.title}</h1>
        </Link>
      ))}
    </div>
  );
};
export default page;
