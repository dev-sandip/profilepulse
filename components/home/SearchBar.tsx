import React from "react";
import { Button } from "../ui/button";
import { Search } from "lucide-react";

type Props = {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
};

export default function SearchBar({ onChange, onSubmit, value }: Props) {
  return (
    <form
      onSubmit={onSubmit}
      className="flex items-center gap-2 w-full shadow-md focus-within:ring-2 dark:focus-within:ring-gray-200 focus-within:ring-slate-800 p-2 rounded-lg bg-white dark:bg-slate-800"
    >
      <section className="flex items-center w-full h-full gap-2">
        <Search className="text-blue-500" />
        <input
          value={value}
          onChange={onChange}
          placeholder="Search Github Username..."
          className="w-full h-[40px] rounded bg-inherit outline-none px-1 text-sm"
          type="text"
        />
      </section>
      <Button size={"sm"} className="rounded-lg px-5 py-2" variant={"default"}>
        Search
      </Button>
    </form>
  );
}
