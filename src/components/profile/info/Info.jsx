import { motion } from "framer-motion";

export const Info = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex justify-center px-6 py-6 text-white min-h-[90vh]"
    >
      <div className="max-w-3xl flex flex-col gap-4 space-y-4 text-center opacity-80 leading-relaxed">
        <h2 className="text-3xl font-semibold opacity-100">Sobre mí</h2>

        <p className="text-xl max-md:text-base">
          Soy Alejandro, desarrollador frontend con más de 2 años de experiencia
          creando interfaces web y 1 año de experiencia en una empresa como
          unico desarrollador frontend.
        </p>

        <p className="text-xl max-md:text-base">
          Me especializo en el desarrollo de interfaces claras y escalables,
          priorizando la experiencia del usuario, la reutilización de
          componentes y el mantenimiento del código.
        </p>

        <p className="text-xl max-md:text-base">
          Trabajo principalmente con tecnologías del ecosistema moderno de
          JavaScript, integrando diseño y lógica para construir productos
          funcionales, escalables y atractivos.
        </p>

        <p className="text-xl max-md:text-base">
          Actualmente abierto a nuevas oportunidades laborales.
        </p>
      </div>
    </motion.section>
  );
};
