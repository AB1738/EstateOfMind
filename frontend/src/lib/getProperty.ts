import { Property } from "@/types/PropertyTypes";

export const getProperty = async (PropertyId: string) => {
  try {
    const response = await fetch(
      `${process.env.BACKEND_BASE_URL}/api/Property/${PropertyId}`
    );
    const property: Property = await response.json();
    return property;
  } catch (e) {
    console.log(e);
  }
};
