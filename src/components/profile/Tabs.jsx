import { useState } from "react";
import { MdOutlineWorkOutline, MdOutlineWork } from "react-icons/md";
import { FaRegUser, FaUser } from "react-icons/fa";

import { Grid } from "./grid/Grid.jsx";
import { Info } from "./info/Info.jsx";
import { motion } from "framer-motion";

export const Tabs = () => {
  const [activeTab, setActiveTab] = useState("works");

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-center gap-10 border-b border-primary-hover"
        id="grid"
      >
        <button
          onClick={() => setActiveTab("works")}
          className={`px-6 py-3 border-b-2 transition cursor-pointer ${
            activeTab === "works"
              ? "border-white"
              : "border-transparent opacity-60 hover:opacity-80"
          }`}
        >
          {activeTab === "works" ? (
            <MdOutlineWork className="size-6" />
          ) : (
            <MdOutlineWorkOutline className="size-6" />
          )}
        </button>

        <button
          onClick={() => setActiveTab("info")}
          className={`px-6 py-3 border-b-2 transition cursor-pointer ${
            activeTab === "info"
              ? "border-white"
              : "border-transparent opacity-60 hover:opacity-80"
          }`}
        >
          {activeTab === "info" ? (
            <FaUser className="size-6" />
          ) : (
            <FaRegUser className="size-6" />
          )}
        </button>
      </motion.div>

      {activeTab === "works" && <Grid />}
      {activeTab === "info" && <Info />}
    </>
  );
};
