import { Properties } from "@/types/PropertyTypes";
import PropertyGrid from "@/components/customComponents/PropertyGrid";

const page = async () => {
  const response = await fetch(`${process.env.BACKEND_BASE_URL}/api/Property/`);
  const properties: Properties = await response.json();
  console.log(properties);
  return (
    <div className="flex flex-col items-center  sm:max-w-7xl mx-auto gap-2 py-2">
      <h1 className="text-4xl font-bold self-start">Properties</h1>
      <PropertyGrid properties={properties} />
    </div>
  );
};
export default page;
