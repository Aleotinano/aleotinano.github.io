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
        return `https://mail.google.com/mail/?view=cm&fs=1&to=${value}`;
      case "discord":
        return `https://discord.com/users/${value}`;

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
        className="fixed bottom-6 max-md:bottom-3 right-6 max-md:right-3  z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
      >
        <motion.div
          layout
          className={`
          bg-message text-white shadow-xl overflow-hidden
          ${
            isOpen
              ? "w-80 h-fit rounded-xl"
              : "w-14 h-14 rounded-full cursor-pointer"
          }
          flex items-center justify-center
        `}
          onClick={() => !isOpen && setIsOpen(true)}
        >
          {!isOpen ? (
            <span className="text-sm font-bold">
              <PiPaperPlaneTiltBold size={18} />
            </span>
          ) : (
            <div className="flex flex-col w-full h-full ">
              <header className="flex items-center justify-between py-3 px-4 border-b border-secondary">
                <h3 className="font-semibold text-lg py-1">Contactos</h3>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsOpen(false);
                  }}
                  className="cursor-pointer hover:scale-95 transition-transform"
                >
                  <IoMdClose size={20} />
                </button>
              </header>

              <ul className="flex-1  text-sm overflow-y-auto">
                {contacts.map((c) => {
                  const Icon = c.icon;
                  return (
                    <li key={c.id}>
                      <a
                        href={getContactLink(c.type, c.value)}
                        target={
                          c.type === "link" || c.type === "discord"
                            ? "_blank"
                            : "_self"
                        }
                        rel={
                          c.type === "link" || c.type === "discord"
                            ? "noopener noreferrer"
                            : ""
                        }
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
