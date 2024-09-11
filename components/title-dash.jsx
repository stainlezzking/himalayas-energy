import { cn } from "@/libs/utility";

const Titledash = ({ children, span }) => {
  return (
    <div className="">
      <h2 className="text-2xl">{children}</h2>
      <div className="pt-3">
        <span className={cn("block w-[80px] h-1 bg-black ", span)}></span>
      </div>
    </div>
  );
};

export default Titledash;
