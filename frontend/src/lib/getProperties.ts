import { Properties } from "@/types/PropertyTypes";

export const getProperties = async () => {
  try {
    const response = await fetch(
      `${process.env.BACKEND_BASE_URL}/api/Property/`
    );
    if (!response.ok) {
    }
    const properties: Properties = await response.json();
    return properties;
  } catch (e) {
    console.log(e);
  }
};
