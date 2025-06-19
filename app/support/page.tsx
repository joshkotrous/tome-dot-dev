import SupportSection from "../support";

export default async function SupportPage() {
  return (
    <div className="relative size-full overflow-hidden flex flex-col gap-6 items-center justify-center text-white">
      <SupportSection />
      <div className="absolute -bottom-80  w-full h-96 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,1)_40%,rgba(255,255,255,0.00)_100%))] animate-pulse [animation-duration:10s]   to-transparent rounded-full blur-[100px]"></div>
    </div>
  );
}
