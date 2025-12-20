import { GridCard } from "./GridCard.jsx";
import { GridCardOpen } from "./GridCardOpen.jsx";
import { projects } from "../../utils/projects.js";
import { useState } from "react";

import { motion } from "framer-motion";

export const Grid = ({ activeTab }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openCard = (project) => {
    setSelectedProject(project);
  };

  const closeCard = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <motion.div
        id="grid"
        layout
        className="grid gap-px grid-cols-2 sm:grid-cols-4 md:grid-cols-8"
      >
        {projects.map((item, index) => (
          <GridCard
            key={item.id}
            id={item.id}
            src={item.src}
            alt={item.title}
            title={item.title}
            activeTab={activeTab}
            index={index}
            project={item}
            openCard={() => openCard(item)}
          />
        ))}
      </motion.div>

      <GridCardOpen project={selectedProject} onClose={closeCard} />
    </>
  );
};
