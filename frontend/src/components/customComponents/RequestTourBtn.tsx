"use client";
import { MapPin } from "lucide-react";
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
import { Calendar } from "@/components/ui/calendar";
import { Button } from "../ui/button";
import { FormEvent, useState } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { isBefore, isEqual } from "date-fns";

const RequestTourBtn = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [currentDate, setCurrentDate] = useState(new Date());
  const [fullName, setFullname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [errors, setError] = useState<Record<string, string>>({});

  // console.log(currentDate.toLocaleDateString());

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const fullNameRegex =
      /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/;
    e.preventDefault();
    setError({});
    let hasErrors = false;
    if (!fullNameRegex.test(fullName)) {
      setError((prevErrors) => ({
        ...prevErrors,
        fullName: "Please enter your full name",
      }));
      hasErrors = true;
    }
    if (!emailRegex.test(email)) {
      setError((prevErrors) => ({
        ...prevErrors,
        email: "Please enter a valid email",
      }));
      hasErrors = true;
    }
    if (
      (date && isBefore(date, currentDate)) ||
      (date && isEqual(date, currentDate))
    ) {
      setError((prevErrors) => ({
        ...prevErrors,
        date: "A future date is required",
      }));
      hasErrors = true;
    }
    if (hasErrors) return;
    console.log(" WE MADE IT");

    // console.log(date > currentDate);
    // console.log(fullName);
    // console.log(email);
  };

  return (
    <Dialog>
      <DialogTrigger className="p-2 mt-auto bg-black hover:scale-101 shadow-md rounded cursor-pointer w-full transition-all duration-200 justify-self-end">
        <p className="flex gap-1 items-center justify-center font-semibold text-white">
          Request A Tour{" "}
          <MapPin size={18} className="animate-bounce duration-700" />
        </p>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center font-bold text-xl">
            Book a tour
          </DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
        <form
          className="flex flex-col gap-1.5"
          onSubmit={(e) => handleSubmit(e)}
        >
          <Label htmlFor="fName" className="font-semibold self-center py-.5">
            Full Name
          </Label>
          <Input
            type="text"
            name="fullName"
            value={fullName}
            onChange={(e) => setFullname(e.target.value)}
          />
          {errors && errors.fullName && (
            <span className="text-xs text-red-500 text-center">
              {errors.fullName}
            </span>
          )}
          <Label htmlFor="email" className="font-semibold self-center py-.5">
            Email
          </Label>
          <Input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors && errors.email && (
            <span className="text-xs text-red-500 text-center">
              {errors.email}
            </span>
          )}
          {errors && errors.date && (
            <span className="text-xs text-red-500 text-center">
              {errors.date}
            </span>
          )}
          <Calendar
            mode="single"
            selected={date}
            required
            onSelect={setDate}
            className="rounded-lg border w-full cursor-pointer"
          />

          <DialogFooter className="flex">
            <DialogClose asChild className="w-1/2">
              <Button variant="outline" className="cursor-pointer ">
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit" className="w-1/2 cursor-pointer">
              Book
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
export default RequestTourBtn;

//     <form>
//     <DialogTrigger asChild>
//       <Button variant="outline">Open Dialog</Button>
//     </DialogTrigger>
//     <DialogContent className="sm:max-w-[425px]">
//       <DialogHeader>
//         <DialogTitle>Edit profile</DialogTitle>
//         <DialogDescription>
//           Make changes to your profile here. Click save when you&apos;re
//           done.
//         </DialogDescription>
//       </DialogHeader>
//       <div className="grid gap-4">
//         <div className="grid gap-3">
//           <Label htmlFor="name-1">Name</Label>
//           <Input id="name-1" name="name" defaultValue="Pedro Duarte" />
//         </div>
//         <div className="grid gap-3">
//           <Label htmlFor="username-1">Username</Label>
//           <Input id="username-1" name="username" defaultValue="@peduarte" />
//         </div>
//       </div>
//       <DialogFooter>
//         <DialogClose asChild>
//           <Button variant="outline">Cancel</Button>
//         </DialogClose>
//         <Button type="submit">Save changes</Button>
//       </DialogFooter>
//     </DialogContent>
//   </form>
