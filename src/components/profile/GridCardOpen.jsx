import { AnimatePresence, motion } from "framer-motion";
import { p } from "framer-motion/client";
import { useEffect, useState } from "react";

export const GridCardOpen = ({ onClose, projects = [], currentIndex = 0 }) => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(currentIndex);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const currentProject = projects[currentProjectIndex];

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") handleNextProject();
      if (event.key === "ArrowLeft") handlePreviousProject();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentProjectIndex]);

  if (!currentProject) return null;

  const handleNextProject = () => {
    setCurrentProjectIndex((prev) =>
      prev === projects.length - 1 ? 0 : prev + 1
    );
    setCurrentImageIndex(0);
  };

  const handlePreviousProject = () => {
    setCurrentProjectIndex((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1
    );
    setCurrentImageIndex(0);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === currentProject.gallery.length - 1 ? 0 : prev + 1
    );
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? currentProject.gallery.length - 1 : prev - 1
    );
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center "
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          layoutId={`card-${currentProject.id}`}
          onClick={(e) => e.stopPropagation()}
          className="bg-primary w-[90%] max-w-5xl max-h-[90%] h-full grid grid-cols-1 md:grid-cols-2 rounded-sm overflow-hidden"
        >
          {/* Imagen */}
          <div className="relative flex items-center justify-center max-h-[90vh]">
            <motion.img
              key={currentImageIndex}
              src={currentProject.gallery[currentImageIndex].img}
              alt={currentProject.gallery[currentImageIndex].alt}
              className="size-full object-cover"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
            />
            {currentProject.gallery.length > 1 ? (
              <>
                <button
                  onClick={handlePreviousImage}
                  className="absolute left-2"
                >
                  ←
                </button>
                <button onClick={handleNextImage} className="absolute right-2">
                  →
                </button>
              </>
            ) : null}

            {currentProject.private ? (
              <p className="z-30 absolute bottom-2 left-2 right-2 bg-black/70 text-sm p-2 rounded text-center">
                Por motivos de confidencialidad, no se muestra la interfaz
                completa ni el código fuente. El funcionamiento y decisiones
                técnicas pueden explicarse en detalle en una entrevista.{" "}
              </p>
            ) : (
              <p className="z-30 absolute bottom-2 left-2 right-2 bg-black/70 text-sm p-2 rounded text-center">
                Proyecto con demo disponible
              </p>
            )}
          </div>

          {/* Info */}
          <div className="p-6 text-white flex flex-col gap-4 overflow-auto">
            <h2 className="text-2xl font-bold">{currentProject.title}</h2>
            <p className="opacity-80">{currentProject.description.short}</p>
            <p className="opacity-80">{currentProject.description.full}</p>
            <p className="opacity-80">{currentProject.description.full2}</p>
            <div className="flex flex-wrap gap-2">
              {currentProject.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-secondary text-white px-2 py-1 rounded"
                >
                  {tech.label}
                </span>
              ))}
            </div>

            {/* ROLE */}
            {currentProject.role?.length > 0 && (
              <div>
                <h3 className="font-bold uppercase  mb-2 text-blue-400">Rol</h3>
                <ul className="flex flex-col flex-wrap gap-1.5 opacity-80">
                  {currentProject.role.map((item, i) => (
                    <li key={i} className="text-white ">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {currentProject.features?.length > 0 && (
              <div>
                <h3 className="text-base font-bold uppercase  mb-2 text-blue-400">
                  Features
                </h3>
                <ul className="flex flex-col flex-wrap gap-1.5  opacity-80">
                  {currentProject.features.map((feature, i) => (
                    <li key={i} className="text-white">
                      • {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {/* DECISIONES TÉCNICAS */}
            {currentProject.technicalDecisions?.length > 0 && (
              <div>
                <h3 className="text-base font-bold uppercase  mb-2 text-blue-400">
                  Decisiones técnicas
                </h3>
                <ul className="space-y-1 opacity-80">
                  {currentProject.technicalDecisions.map((decision, i) => (
                    <li key={i}>▸ {decision}</li>
                  ))}
                </ul>
              </div>
            )}
            <div className="flex gap-2 mt-auto">
              {currentProject.demo && (
                <a
                  className="flex-1 text-center bg-primary-hover p-3 rounded-lg hover:bg-secondary transition-colors cursor-"
                  href={currentProject.demo}
                >
                  Ver proyecto
                </a>
              )}
              <a
                className="flex-1 text-center bg-primary-hover p-3 rounded-lg hover:bg-secondary transition-colors cursor-"
                href={currentProject.github}
              >
                GitHub
              </a>
            </div>
          </div>
        </motion.div>

        {/* Navegación proyectos */}
        <button onClick={handlePreviousProject} className="absolute left-4">
          ←
        </button>
        <button onClick={handleNextProject} className="absolute right-4">
          →
        </button>
      </motion.div>
    </AnimatePresence>
  );
};
