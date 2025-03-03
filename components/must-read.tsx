import { PostType } from "@/types";

import React from "react";
import { MustReadCard } from "./must-read-card";
import { StayConnected } from "./stay-connected";

export const MustRead = ({ posts }: { posts: PostType[] }) => {
  return (
    <div className=" w-full px-4 lg:px-0 max-w-6xl mx-auto py-8 md:py-12 lg:py-14">
      <div className=" grid sm:grid-cols-3 md:grid-cols-6 gap-y-4 gap-x-4">
        <div className="md:col-span-4 sm:col-span-2 flex flex-col gap-y-5">
            <div className=" font-semibold w-full my-3">
             <h3 className=" text-3xl text-neutral-900">
                 Must read
             </h3>
            </div>
          {posts.slice(3, 6).map((post) => (
            <MustReadCard key={post._id} data={post} />
          ))}
        </div>
        <div className=" md:col-span-2 sm:col-span-1  md:pt-18 lg:pt-20">
           <StayConnected />
        </div>
      </div>
    </div>
  );
};
