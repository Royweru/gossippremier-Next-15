import { HeadphonesIcon, MoreHorizontalIcon, Tv2Icon } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,

  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const TopHeader = () => {
  return (
    <div
      className={`w-full left-0 transition-all duration-300 ${
        typeof window !== "undefined" && window.scrollY > 50
          ? "bg-black/80 backdrop-blur-sm"
          : "bg-accents-charcoalBlack"
      } text-white fixed top-0 z-50`}
    >
      <div className="max-w-5xl lg:px-0 px-4 mx-auto py-3 flex items-center justify-between">
        <Link href={"/"}>
          <h4 className="md:text-4xl sm:text-2xl text-xl font-bold">
            Gossippremier
          </h4>
        </Link>

        <div className=" lg:hidden block">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <button className="  bg-transparent hover:bg-black/50 hover:text-neutral-200/85 cursor-pointer rounded-full p-4">
                <MoreHorizontalIcon className=" size-5" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className=" w-52  p-2">
              <DropdownMenuItem className=" hover:focus:bg-accents-charcoalBlack/70 focus:text-white">
                <a href="/listen" className="w-full">
                  <button
                    className=" w-full px-4 flex items-center  font-semibold font-montserrat
                       py-2 rounded-xl bg-transparent hover:bg-transparent gap-x-2 relative cursor-pointer "
                  >
                    <HeadphonesIcon className=" size-5 " />
                    <span>Listen</span>
                  </button>
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem className=" hover:focus:bg-accents-charcoalBlack/70 focus:text-white">
                <a href="/watch" className="w-full">
                  <button
                    className=" w-full px-4 flex items-center  font-semibold font-montserrat
                       py-2 rounded-xl bg-transparent hover:bg-transparent gap-x-2 relative cursor-pointer "
                  >
                    <Tv2Icon className=" size-5 font-bold" />
                    <span>Watch</span>
                  </button>
                </a>
              </DropdownMenuItem>
        
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Button
                   variant={"default"}
                  className="font-semibold w-full py-2"
                >
                  Sign in
                </Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="lg:flex gap-x-4 items-center hidden">
          <a href="/podcast">
            <button className="py-2 rounded-xl bg-transparent hover:bg-neutral-700/90 cursor-pointer border-none text-white font-semibold px-3.5 flex items-center justify-center gap-x-2">
              <HeadphonesIcon className="size-4 text-white font-bold" />
              <span className="italic">Listen</span>
            </button>
          </a>
          <a href="/watch">
            <button className="py-2 bg-transparent rounded-xl hover:bg-neutral-700/90 cursor-pointer border-none text-white font-semibold px-3.5 flex items-center justify-center gap-x-2">
            <Tv2Icon className="size-4 text-white font-bold" />
              <span className="italic">Watch</span>
            </button>
          </a>
          <Button variant={"secondary"} className="font-semibold" size={"lg"}>
            Sign in
          </Button>
        </div>
      </div>
    </div>
  );
};
