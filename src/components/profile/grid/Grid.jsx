import { GridCard } from "./GridCard.jsx";
import { GridCardOpen } from "./GridCardOpen.jsx";
import { projects } from "../../../utils/projects.js";
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
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        layout
        className="
        grid gap-px
        grid-cols-2     
        sm:grid-cols-3
        lg:grid-cols-4  
      "
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

      {selectedProject && (
        <GridCardOpen
          onClose={closeCard}
          projects={projects}
          currentIndex={projects.findIndex((p) => p.id === selectedProject.id)}
        />
      )}
    </>
  );
};
