"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  BriefcaseIcon,
  FlowerIcon,
  HeartIcon,
  LightbulbIcon,
  Menu,
  MoonIcon,
  MountainSnow,
  SearchIcon,
  SettingsIcon,
  SunIcon,
  UserCircleIcon,
} from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";

export default function Home() {
  const { setTheme } = useTheme();

  return (
    <main className="flex flex-col p-4 items-center justify-center max-w-screen-md mx-auto">
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="container py-24 lg:py-32">
          <div className="text-center">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              QUIZ APP
            </h1>
            <p className="mt-3 text-xl text-muted-foreground">
              Stay in the know with insights from industry experts.
            </p>
            <div className="mt-7 sm:mt-12 mx-auto max-w-xl relative">
              {/* Form */}
              <form>
                <div className="relative z-10 flex space-x-3 p-3 border bg-background rounded-lg shadow-lg">
                  <div className="flex-[1_0_0%]">
                    <Label htmlFor="article" className="sr-only">
                      Search Quiz
                    </Label>
                    <Input
                      name="article"
                      className="h-full"
                      id="article"
                      placeholder="Search Quiz"
                    />
                  </div>
                  <div className="flex-[0_0_auto]">
                    <Button size={"icon"}>
                      <SearchIcon />
                    </Button>
                  </div>
                </div>
              </form>
              {/* End Form */}
              {/* SVG Element */}
              <div className="hidden md:block absolute top-0 end-0 -translate-y-12 translate-x-20">
                <svg
                  className="w-16 h-auto text-orange-500"
                  width={121}
                  height={135}
                  viewBox="0 0 121 135"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
                    stroke="currentColor"
                    strokeWidth={10}
                    strokeLinecap="round"
                  />
                  <path
                    d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
                    stroke="currentColor"
                    strokeWidth={10}
                    strokeLinecap="round"
                  />
                  <path
                    d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
                    stroke="currentColor"
                    strokeWidth={10}
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              {/* End SVG Element */}
              {/* SVG Element */}
              <div className="hidden md:block absolute bottom-0 start-0 translate-y-10 -translate-x-32">
                <svg
                  className="w-40 h-auto text-cyan-500"
                  width={347}
                  height={188}
                  viewBox="0 0 347 188"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 82.4591C54.7956 92.8751 30.9771 162.782 68.2065 181.385C112.642 203.59 127.943 78.57 122.161 25.5053C120.504 2.2376 93.4028 -8.11128 89.7468 25.5053C85.8633 61.2125 130.186 199.678 180.982 146.248L214.898 107.02C224.322 95.4118 242.9 79.2851 258.6 107.02C274.299 134.754 299.315 125.589 309.861 117.539L343 93.4426"
                    stroke="currentColor"
                    strokeWidth={7}
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              {/* End SVG Element */}
            </div>
            <div className="mt-10 mb-4">
              <Label className="text-lg font-semibold">CATEGORY</Label>
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              <Button variant={"outline"}>
                <BriefcaseIcon className="flex-shrink-0 w-3 h-auto mr-2" />
                Business
              </Button>
              <Button variant={"outline"}>
                <SettingsIcon className="flex-shrink-0 w-3 h-auto mr-2" />
                Strategy
              </Button>
              <Button variant={"outline"}>
                <HeartIcon className="flex-shrink-0 w-3 h-auto mr-2" />
                Health
              </Button>
              <Button variant={"outline"}>
                <LightbulbIcon className="flex-shrink-0 w-3 h-auto mr-2" />
                Creative
              </Button>
              <Button variant={"outline"}>
                <FlowerIcon className="flex-shrink-0 w-3 h-auto mr-2" />
                Environment
              </Button>
              <Button variant={"outline"}>
                <MountainSnow className="flex-shrink-0 w-3 h-auto mr-2" />
                Adventure
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* End Hero */}

      <div className="fixed bottom-0 left-1/2 z-20 mx-auto w-full -translate-x-1/2 border-gray-300 bg-white p-2 px-3 shadow-xl dark:border-gray-600 dark:bg-black md:bottom-4 md:w-auto md:rounded-xl md:border md:bg-gray-300/50 md:backdrop-blur md:dark:bg-gray-800/50">
        <ul className="flex items-center justify-center gap-3">
          <button
            className="hidden dark:block hover:text-muted-foreground"
            onClick={() => setTheme("light")}
          >
            <MoonIcon />
          </button>
          <button
            className="block dark:hidden hover:text-muted-foreground"
            onClick={() => setTheme("dark")}
          >
            <SunIcon />
          </button>
          <Link className="hover:text-muted-foreground" href="/login">
            <UserCircleIcon />
          </Link>
        </ul>
      </div>
    </main>
  );
}
