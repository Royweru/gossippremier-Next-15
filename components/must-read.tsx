import { PostType } from "@/types";

import React from "react";
import { MustReadCard } from "./must-read-card";
import { StayConnected } from "./stay-connected";

export const MustRead = ({ posts }: { posts: PostType[] }) => {
  return (
    <div className=" w-full px-4 lg:px-0 max-w-5xl mx-auto py-8 md:py-12 lg:py-14">
      <div className=" grid md:grid-cols-2 gap-y-4 gap-x-4">
        <div className="col-span-1 flex flex-col gap-y-5">
            <div className=" font-semibold w-full my-3">
             <h3 className=" text-3xl text-neutral-900">
                 Must read
             </h3>
            </div>
          {posts.slice(0, 3).map((post) => (
            <MustReadCard key={post._id} data={post} />
          ))}
        </div>
        <div className=" col-span-1 md:pt-18 lg:pt-20">
           <StayConnected />
        </div>
      </div>
    </div>
  );
};
