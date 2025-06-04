import { getProperty } from "@/lib/getProperty";
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
      {property.bathrooms}
      {property.bedrooms}
      {property.city}
      {property.sqFt}
      {property.imageUrl}
    </div>
  );
};
export default page;
