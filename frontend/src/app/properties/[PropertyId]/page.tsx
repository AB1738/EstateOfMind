import { Property } from "@/types/PropertyTypes";

interface PropertyPageProps {
  params: { PropertyId: string };
}
const page = async ({ params }: PropertyPageProps) => {
  const { PropertyId } = await params;
  console.log(await PropertyId);
  const response = await fetch(
    `${process.env.BACKEND_BASE_URL}/api/Property/${PropertyId}`
  );
  const property: Property = await response.json();
  return (
    <div>
      {property.title}
      {property.description}
      {property.price}
      {property.address}
      {property.bathrooms}
      {property.bedrooms}
      {property.city}
      {property.sqFt}
      {property.imageUrl}
    </div>
  );
};
export default page;
