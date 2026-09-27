import React from "react";
import Story from "@/components/Story";
import Post from "@/components/Post";
import Navbar from "@/Components/Navbar";


const Page = () => {
  return (
    <div>
      <Navbar />

      <Story />

      <Post/>
    </div>
  );
};

export default Page;
