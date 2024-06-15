import React from "react";
import FeedCard from "@/components/FeedCard";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="container max-w-[1260px] m-auto ">
      <div className="flex flex-col-reverse sm:grid grid-cols-2 sm:grid-cols-6 lg:grid-cols-12 h-screen max-w-[1260px] justify-center">
        <div className="sm:col-span-1 lg:col-span-3 flex items-start sm:flex-col sm:w-full sm:items-center lg:items-start sm:text-3xl lg:pl-[20%] lg:pr-4 pt-4 ">
          <Sidebar />
        </div>
        <div className="h-screen sm:col-span-4 lg:col-span-5 border-r-[.2px] border-l-[.2px] border-gray-600 ">
          <FeedCard />
        </div>
        <div className="hidden sm:block sm:col-span-1 lg:col-span-4"></div>
      </div>
    </div>
  );
}
