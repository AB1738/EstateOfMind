import { Properties } from "@/types/PropertyTypes";
import PropertyGrid from "@/components/customComponents/PropertyGrid";
import { getProperties } from "@/lib/getProperties";
import PropertyFilter from "@/components/customComponents/PropertyFilter";

const page = async () => {
  const properties = await getProperties();
  if (!properties) return <h1>No properties</h1>;
  return (
    <div className="flex flex-col items-center  sm:max-w-7xl mx-auto gap-2 py-2">
      <div className="flex justify-between items-center py-2 w-full">
        <h1 className="text-4xl font-bold ">Properties</h1>
        {/* <PropertyFilter /> */}
      </div>
      <PropertyGrid properties={properties} />
    </div>
  );
};
export default page;
