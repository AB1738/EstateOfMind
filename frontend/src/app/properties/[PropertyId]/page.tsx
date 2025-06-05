import { getProperty } from "@/lib/getProperty";
import Image from "next/image";
import { redirect } from "next/navigation";

interface PropertyPageProps {
  params: { PropertyId: string };
}
const page = async ({ params }: PropertyPageProps) => {
  const { PropertyId } = await params;
  const property = await getProperty(PropertyId);
  if (!property) {
    redirect("/");
  }
  return (
    <div>
      {property.title}
      {property.description}
      {property.price}
      {property.address}
      {property.city}
      <p className="font-bold">{property.state}</p>
      {property.bathrooms}
      {property.bedrooms}
      {property.sqFt}
      <Image
        height={50}
        width={50}
        alt="Property image"
        src={property.imageUrl}
      />
    </div>
  );
};
export default page;
