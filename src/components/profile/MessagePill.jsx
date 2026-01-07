import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PiPaperPlaneTiltBold } from "react-icons/pi";
import { contacts } from "../../utils/contacts";
import { IoMdClose } from "react-icons/io";

export const MessagePill = () => {
  const [isOpen, setIsOpen] = useState(false);

  const getContactLink = (type, value) => {
    switch (type) {
      case "whatsapp":
        return `https://wa.me/${value}`;
      case "email":
        return `mailto:${value}`;
      case "link":
      default:
        return value;
    }
  };

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
            <div className="flex flex-col w-full h-full py-2">
              <header className="flex items-center justify-between py-3 px-4 border-b border-secondary">
                <h3 className="font-semibold text-lg  ">Contactos</h3>
                <i>
                  <IoMdClose size={20} />
                </i>
              </header>

              <ul className="flex-1 rounded-lg text-sm ">
                {contacts.map((c) => {
                  const Icon = c.icon;
                  return (
                    <li key={c.id}>
                      <a
                        href={getContactLink(c.type, c.value)}
                        target={c.type === "link" ? "_blank" : "_self"}
                        rel={c.type === "link" ? "noopener noreferrer" : ""}
                        className="flex items-center text-base gap-3 py-4 px-4 hover:bg-secondary transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Icon size={24} />
                        <p>{c.label}</p>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
