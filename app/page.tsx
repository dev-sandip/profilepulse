import { ModeToggle } from "@/components/home/theme-button";

export default function Home() {
  return (
    <div className=" bg-background text-foreground flex min-h-screen w-full bg-stone-100 p-1.5 sm:p-4 pt-10 transition-all sm:pt-12">
      <div className="mx-auto flex w-full max-w-[600px] flex-col gap-8 rounded p-2">
        <section className="flex justify-between gap-3">
          <p className="text-xl font-semibold">DevFinder</p>
          <ModeToggle />
        </section>
      </div>
    </div>
  );
}
