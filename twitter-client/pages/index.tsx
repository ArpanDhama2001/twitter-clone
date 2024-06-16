import React from "react";
import FeedCard from "@/components/FeedCard";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="container max-w-[1260px] m-auto ">
      <div
        id="small-screen"
        className="sm:hidden flex flex-col h-screen justify-between">
        <div className="order-1">
          <Header />
        </div>
        <div className="order-2 grow">
          <FeedCard />
        </div>
        <div className="order-3">
          <Footer />
        </div>
      </div>

      <div
        id="medium-screen"
        className="hidden sm:grid sm:grid-cols-6 lg:grid-cols-12 h-screen max-w-[1260px] justify-center">
        <div className="sm:col-span-1 lg:col-span-3 flex items-start sm:flex-col sm:w-full sm:items-center lg:items-start sm:text-3xl lg:pl-[20%] lg:pr-4 pt-4 ">
          <Sidebar />
        </div>
        <div className="bg-red-500 h-[100vh] sm:col-span-4 lg:col-span-5 border-r-[.2px] border-l-[.2px] border-gray-600 ">
          <FeedCard />
        </div>
        <div className="hidden sm:block sm:col-span-1 lg:col-span-4"></div>
      </div>
    </div>
  );
}
