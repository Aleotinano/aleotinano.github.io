export const Cta = ({ label, id, children, action }) => {
  const handleClick = () => {
    if (action === "message") {
      window.dispatchEvent(new CustomEvent("toggle-message-pill"));
    } else if (action === "projects") {
      window.location.href = "#grid";
    }
  };

  return (
    <button
      id={id}
      onClick={handleClick}
      className="flex-1 flex justify-center items-center gap-3 px-6 py-3.5 max-s:px-4 max-s:py-3 w-full transition-colors hover:bg-secondary bg-primary-hover rounded-xl text-white text-sm max-s:text-xs font-semibold cursor-pointer"
    >
      {children}
      {label}
    </button>
  );
};
