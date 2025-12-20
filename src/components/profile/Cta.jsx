export const Cta = ({ label, id, buttonFunction, children }) => {
  const handleClick = () => {
    if (buttonFunction === "message") {
      alert("message button");
    }
    if (buttonFunction === "proyects") {
      window.location.href = "#grid";
    }
  };

  return (
    <button
      id={id}
      onClick={handleClick}
      className="flex-1 flex justify-center items-center gap-3 px-6 py-3.5 w-full transition-colors hover:bg-secondary bg-primary-hover rounded-xl text-white text-sm font-semibold cursor-pointer"
    >
      {children}
      {label}
    </button>
  );
};
