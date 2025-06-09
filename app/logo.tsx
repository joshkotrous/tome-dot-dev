import { cn } from "@/lib/utils";
import TomeLogo from "./tomeIcon";
import { Instrument_Serif } from "next/font/google";

const instrumentSerif = Instrument_Serif({
  style: ["italic", "normal"],
  weight: ["400"],
  subsets: ["latin"],
});
export default function Logo({
  className,
  logoClass,
}: {
  className?: string;
  logoClass?: string;
}) {
  return (
    <div className={cn("flex items-center gap-4", className)}>
      <TomeLogo className={cn("size-14", logoClass)} />
      <h1
        className={cn(
          `${instrumentSerif.className}  tracking-wide italic text-5xl`,
          className
        )}
      >
        Tome
      </h1>
    </div>
  );
}
