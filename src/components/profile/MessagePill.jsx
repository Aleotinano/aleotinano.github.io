import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PiPaperPlaneTiltBold } from "react-icons/pi";

export const MessagePill = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handler = () => {
      setIsOpen(true);
    };

    window.addEventListener("toggle-message-pill", handler);
    return () => window.removeEventListener("toggle-message-pill", handler);
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        id="message-pill"
        className="fixed bottom-6 right-6 z-50 cursor-pointer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
      >
        <motion.div
          layout
          onClick={() => setIsOpen(!isOpen)}
          className={`
            bg-message text-white shadow-xl overflow-hidden
            ${isOpen ? "w-80 h-96 rounded-xl" : "w-14 h-14 rounded-full"}
            flex items-center justify-center
          `}
        >
          {!isOpen ? (
            <span className="text-sm font-bold">
              <PiPaperPlaneTiltBold size={18} />
            </span>
          ) : (
            <div className="flex flex-col w-full h-full py-2  gap-3">
              <h4 className="font-semibold text-sm py-2 px-4 border-b border-secondary">
                Contactos
              </h4>

              <ul className="flex-1 rounded-lg p-3 text-sm px-4">
                <li>
                  <i></i>
                  <p></p>
                </li>
              </ul>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
