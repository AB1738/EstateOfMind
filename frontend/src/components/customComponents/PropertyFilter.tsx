"use client";
import { Slider } from "@/components/ui/slider";
import { ListFilter, SlidersHorizontal } from "lucide-react";
import { FormEvent, useRef, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
const PropertyFilter = () => {
  const [maxPrice, setMaxPrice] = useState<number>(18000000);
  const [maxSqft, setMaxSqft] = useState<number>(20000);
  const [selectValue, setSelectValue] = useState<string>("");
  const closeRef = useRef(null);
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
    console.log(maxPrice);
    console.log(maxSqft);
    console.log(selectValue);
  };

  return (
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
          <Select value={selectValue} onValueChange={(e) => setSelectValue(e)}>
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
              type="submit"
              className="cursor-pointer flex items-center gap-1"
            >
              Filter <ListFilter size={16} />
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
export default PropertyFilter;
