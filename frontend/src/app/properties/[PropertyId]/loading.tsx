import { Skeleton } from "@/components/ui/skeleton";
const loading = () => {
  return (
    <div className="p-3 ">
      <div className="flex flex-col md:flex-row w-full gap-1.5">
        <Skeleton className="w-full  md:w-[60%] lg:w-[70%]  min-h-full animate-pulse" />
        <div className="flex flex-col gap-2 flex-1 items-center justify-between min-h-full  ">
          <Skeleton className="w-full h-10 animate-pulse" />

          <div className="flex flex-col gap-2 pt-5 items-center">
            <Skeleton className="w-full h-10 animate-pulse" />

            <div className="flex gap-1.5 items-center">
              <div className="flex gap-1.5 text-center text-sm sm:text-base">
                <Skeleton className="w-full h-10 animate-pulse" />
                <Skeleton className="w-full h-10 animate-pulse" />
                <Skeleton className="w-full h-10 animate-pulse" />
              </div>
            </div>
            <div className="text-center text-sm sm:text-base flex items-center gap-1.5">
              <Skeleton className="w-full h-10 animate-pulse" />
            </div>
            <div className="text-center text-sm sm:text-base flex items-center">
              <Skeleton className="w-full h-10 animate-pulse" />
            </div>
            <div className="text-center text-sm sm:text-base">
              <Skeleton className="w-full h-10 animate-pulse" />
            </div>
            <div className="text-center text-lg sm:text-xl font-semibold ">
              <Skeleton className="w-full h-10 animate-pulse" />
            </div>
          </div>
          <button className="p-2 mt-auto shadow-md rounded cursor-pointer w-full transition-all duration-200 justify-self-end">
            <Skeleton className="w-full h-15 rounded animate-pulse" />
          </button>
        </div>
      </div>
      <Skeleton className="w-full h-50 animate-pulse" />
    </div>
  );
};
export default loading;
