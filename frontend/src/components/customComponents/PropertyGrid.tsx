"use client";

import { Properties } from "@/types/PropertyTypes";
import Image from "next/image";
import Link from "next/link";
import { Bed, Bath, SlidersHorizontal, ListFilter } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import PropertyFilter from "./PropertyFilter";
import { FormEvent, MouseEvent, useRef, useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Slider } from "../ui/slider";
import { Button } from "../ui/button";

interface GridPropType {
  properties: Properties;
}

const PropertyGrid = ({ properties }: GridPropType) => {
  const [maxPrice, setMaxPrice] = useState<number>(18000000);
  const [filteredProperties, setFilteredProperties] =
    useState<Properties>(properties);
  const [maxSqft, setMaxSqft] = useState<number>(20000);
  const [selectValue, setSelectValue] = useState<string>("");
  const closeRef = useRef<HTMLButtonElement | null>(null);
  const states = [
    "AL",
    "AK",
    "AZ",
    "AR",
    "CA",
    "CO",
    "CT",
    "DE",
    "FL",
    "GA",
    "HI",
    "ID",
    "IL",
    "IN",
    "IA",
    "KS",
    "KY",
    "LA",
    "ME",
    "MD",
    "MA",
    "MI",
    "MN",
    "MS",
    "MO",
    "MT",
    "NE",
    "NV",
    "NH",
    "NJ",
    "NM",
    "NY",
    "NC",
    "ND",
    "OH",
    "OK",
    "OR",
    "PA",
    "RI",
    "SC",
    "SD",
    "TN",
    "TX",
    "UT",
    "VT",
    "VA",
    "WA",
    "WV",
    "WI",
    "WY",
  ];
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFilteredProperties(properties);
    setFilteredProperties((prevProperties) => {
      return prevProperties.filter(
        (property) =>
          property.price <= maxPrice &&
          property.sqFt <= maxSqft &&
          (selectValue === "" || property.state === selectValue)
      );
    });
    closeRef.current?.click();
  };
  const handleReset = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    e.preventDefault();
    setSelectValue("");
    setMaxPrice(18000000);
    setMaxSqft(20000);
    setFilteredProperties(properties);
    closeRef.current?.click();
  };
  return (
    <div>
      <Dialog>
        <DialogTrigger className="" asChild>
          <div>
            <Tooltip>
              <TooltipTrigger className="cursor-pointer">
                <SlidersHorizontal />
              </TooltipTrigger>
              <TooltipContent>
                <p> Filter properties</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </DialogTrigger>
        <DialogContent className="w-full bg-[#131212] border-0">
          <DialogHeader>
            <DialogTitle className="text-white">Filter Properties</DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>

          <form className="w-full  " onSubmit={(e) => handleSubmit(e)}>
            <Select
              value={selectValue}
              onValueChange={(e) => setSelectValue(e)}
            >
              <SelectTrigger className="w-full bg-white cursor-pointer">
                <SelectValue placeholder="State" />
              </SelectTrigger>
              <SelectContent className="w-full">
                {states.map((state) => (
                  <SelectItem
                    value={state}
                    key={state}
                    className="w-full bg-white text-black cursor-pointer hover:bg-gray-500"
                  >
                    {state}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <div className="flex gap-1 py-1.5">
              <p className="text-sm font-semibold text-white">
                Max Price: ${new Intl.NumberFormat().format(maxPrice)}
              </p>
              <Slider
                defaultValue={[maxPrice]}
                max={20000000}
                step={1}
                value={[maxPrice]}
                onValueChange={(e) => setMaxPrice(e[0])}
                className="cursor-pointer w-3/5"
              />
            </div>
            <div className="flex gap-1 py-1.5">
              <p className="text-sm font-semibold text-white">
                Square Footage: ${new Intl.NumberFormat().format(maxSqft)}
              </p>
              <Slider
                defaultValue={[maxSqft]}
                max={20000}
                step={1}
                value={[maxSqft]}
                onValueChange={(e) => setMaxSqft(e[0])}
                className="cursor-pointer w-3/5"
              />
            </div>

            <DialogFooter className="flex">
              <DialogClose asChild className="" ref={closeRef}>
                <Button variant="outline" className="cursor-pointer ">
                  Cancel
                </Button>
              </DialogClose>
              <Button
                onClick={(e) => handleReset(e)}
                className="cursor-pointer"
              >
                Reset
              </Button>
              <Button
                type="submit"
                className="cursor-pointer flex items-center gap-1"
              >
                Filter <ListFilter size={16} />
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>{" "}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-2">
        {filteredProperties.map((property) => (
          <Link
            href={`/properties/${property.id}`}
            key={property.id}
            className="hover:scale-101  "
          >
            <div className="flex flex-col bg-black text-white items-center rounded gap-1.5 pb-3">
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
    </div>
  );
};
export default PropertyGrid;
