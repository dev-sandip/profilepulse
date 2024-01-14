"use client";
import SearchBar from "@/components/home/SearchBar";
import { ModeToggle } from "@/components/home/theme-button";
import { GitHubUser } from "@/components/types/types";
import { MapPin, Link2, Twitter, Building2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useQuery } from "react-query";
import dateFormat from "dateformat";
import { useState } from "react";
import Loading from "@/components/home/Loading";

export default function Home() {
  const [userName, setuserName] = useState("git-sandip");
  const { isLoading, error, data, refetch } = useQuery<GitHubUser>(
    "repoData",
    () =>
      fetch(`https://api.github.com/users/${userName}`).then((res) =>
        res.json()
      )
  );

  if (isLoading) return <Loading />;
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    refetch();
  };
  return (
    <div className="  flex min-h-screen w-full bg-stone-100 p-1.5 sm:p-4 pt-10 transition-all sm:pt-12 dark:bg-slate-900">
      <div className="  mx-auto flex w-full max-w-[600px] flex-col gap-8 rounded p-2">
        <section className="flex justify-between gap-3">
          <p className="text-xl font-semibold">ProfilePulse</p>
          <ModeToggle />
        </section>
        <section className="flex flex-col gap-6">
          <SearchBar
            onChange={(e) => {
              setuserName(e.target.value);
            }}
            onSubmit={handleSubmit}
            value={userName}
          />
          {data?.message ? (
            <div className="flex w-full flex-col gap-5 rounded-lg bg-white px-4 py-8 text-center font-semibold text-red-400 dark:bg-slate-500">
              User Not Found 🥹!
            </div>
          ) : (
            <main className="flex w-full flex-col gap-5 rounded-lg bg-white dark:bg-slate-800 px-4 py-8 min-h-[200px]">
              <section className="flex gap-4">
                <Image
                  src={data?.avatar_url ?? ""}
                  alt="profile-image"
                  width={200}
                  height={200}
                  className="h-20 w-20 rounded-full"
                />
                <section className=" flex flex-col justify-between gap-1 transition-all sm:w-full sm:flex-row">
                  <div>
                    <h1> {data?.name}</h1>
                    <Link
                      className="text-blue-500 hover:underline text-sm transition-all"
                      href={`https://github.com/${data?.login}`}
                      target="_blank"
                    >
                      @{data?.login}
                    </Link>
                  </div>
                  <p>
                    {" "}
                    <span>Joined on </span>
                    <span>{dateFormat(data?.created_at, "dd mmm yyyy")}</span>
                  </p>
                </section>
              </section>
              <section className="flex flex-col gap-5">
                <p>
                  {data?.bio ?? (
                    <span className="opacity-60">This profile has no bio.</span>
                  )}
                </p>
                <div className="flex justify-between gap-3 rounded-lg bg-stone-100 px-6 py-4 dark:bg-slate-900 m-h-[50px]">
                  <div className="flex flex-col items-center gap-2">
                    <p className="text-xs opacity-60">Repos</p>
                    <p className="text-sm font-bold sm:text-base">
                      {data?.public_repos}
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <p className="text-xs opacity-60">Followers</p>
                    <p className="text-sm font-bold sm:text-base">
                      {data?.followers}
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <p className="text-xs opacity-60">Following</p>
                    <p className="text-sm font-bold sm:text-base">
                      {data?.following}
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="flex gap-2">
                    {/* Loaction */}
                    <MapPin className="text-xl" />
                    <p>
                      {data?.location ?? (
                        <span className="opacity-60">Not Available</span>
                      )}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    {/* Link */}

                    <Link2 className="text-xl" />

                    {data?.blog ? (
                      <Link
                        target="_blank"
                        title={data?.blog}
                        className="hover:underline opacity-60 max-w-[600px] overflow-hidden text-ellipsis"
                        href={data?.blog ?? "#"}
                      >
                        {data?.blog}
                      </Link>
                    ) : (
                      <span className="opacity-60">Not Available</span>
                    )}
                  </div>
                  <div className="flex gap-2">
                    {/* Twitter */}

                    <Twitter className="text-xl" />
                    <p>
                      {data?.twitter_username ?? (
                        <span className="opacity-60">Not Available</span>
                      )}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    {/* Organization */}

                    <Building2 className="text-xl" />
                    <p>
                      {data?.company ?? (
                        <span className="opacity-60">Not Available</span>
                      )}
                    </p>
                  </div>
                </div>
              </section>
            </main>
          )}
        </section>
      </div>
    </div>
  );
}
