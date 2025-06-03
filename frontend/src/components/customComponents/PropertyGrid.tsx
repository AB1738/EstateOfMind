"use client";

import { Properties } from "@/types/PropertyTypes";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface GridPropType {
  properties: Properties;
}

const PropertyGrid = ({ properties }: GridPropType) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
      {properties.map((property) => (
        <Link
          href={`/properties/${property.id}`}
          key={property.id}
          className="hover:scale-101  "
        >
          <Card className="h-full">
            <CardHeader>
              <CardTitle>{property.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <Image
                height={1000}
                width={1000}
                alt="Property Image"
                src={property.imageUrl}
                className="h-50"
              />
              <CardDescription>{property.description}</CardDescription>
            </CardContent>
            <CardFooter>
              <p>{property.price}</p>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  );
};
export default PropertyGrid;
