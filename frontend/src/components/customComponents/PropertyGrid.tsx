"use client";

import { Properties } from "@/types/PropertyTypes";
import Image from "next/image";
import Link from "next/link";
import { Bed, Bath } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

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
          <div className="flex flex-col bg-white items-center rounded gap-1.5 pb-3">
            <Image
              height={1000}
              width={1000}
              alt="Property Image"
              src={property.imageUrl}
              className="h-70 w-full rounded-t"
            />
            <h2 className="font-semibold">{property.title}</h2>
            <div className="flex gap-1.5">
              <p>{property.address},</p>
              <p>{property.city},</p>
              <p>{property.state}</p>
            </div>
            <p className="flex gap-1 items-center">
              {new Intl.NumberFormat().format(property.sqFt)} SqFt
            </p>
            <div className="flex gap-1.5">
              <div className="flex gap-1 items-center">
                <Tooltip>
                  <TooltipTrigger>
                    <p className="flex gap-1 items-center">
                      {property.bedrooms} <Bed size={20} />
                    </p>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p> {property.bedrooms} Bed</p>
                  </TooltipContent>
                </Tooltip>
              </div>
              <div>
                <Tooltip>
                  <TooltipTrigger>
                    <p className="flex gap-1 items-center">
                      {property.bathrooms} <Bath size={20} />
                    </p>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p> {property.bedrooms} Bath</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </div>

            <p className="font-bold">
              ${new Intl.NumberFormat().format(property.price)}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};
export default PropertyGrid;
