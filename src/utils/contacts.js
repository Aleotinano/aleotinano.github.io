import { FaWhatsapp } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

export const contacts = [
  {
    id: "linkedin",
    label: "LinkedIn",
    icon: FaLinkedin,
    type: "link",
    value: "https://www.linkedin.com/in/aleotinano",
  },
  {
    id: "github",
    label: "Github",
    icon: FaGithub,
    type: "link",
    value: "https://github.com/Aleotinano",
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    icon: FaWhatsapp,
    type: "whatsapp",
    value: "5492646779473",
  },
  {
    id: "gmail",
    label: "Gmail",
    icon: MdOutlineEmail,
    type: "email",
    value: "alejandrootinano2@gmail.com",
  },
];
