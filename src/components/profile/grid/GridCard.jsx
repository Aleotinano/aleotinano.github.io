import { motion } from "framer-motion";

export const GridCard = ({
  alt,
  title,
  activeTab,
  index,
  id,
  openCard,
  project,
}) => {
  return (
    <motion.div
      key={`key-card-${index}`}
      layoutId={`card-${id}`}
      layout="position"
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 15,
        mass: 0.1,
      }}
      onClick={openCard}
      className="col-span-1 relative w-full cursor-pointer group"
    >
      <div className="w-full h-full aspect-perso max-h-100 overflow-hidden">
        <img
          src={project.gallery[0].img}
          alt={alt}
          className="w-full h-full object-cover"
          draggable={false}
        />
      </div>

      <div className="absolute inset-0 bg-black/22 group-hover:bg-black/60 transition-all duration-300" />

      <span className="absolute z-10 flex flex-wrap gap-1.5 bottom-4 left-4 group-hover:opacity-60 transition-opacity">
        {project.technologies.map((tech, idx) => {
          if (!tech) return null;

          return (
            <img
              key={idx}
              src={tech.src}
              alt={tech.label}
              className="size-6 max-s:size-4 rounded-full"
            />
          );
        })}
      </span>

      <p className="absolute inset-0 flex items-center justify-center text-white text-lg font-semibold opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
        {title}
      </p>
    </motion.div>
  );
};
