import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const StoriesCarousel = ({ children }) => {
  const wrapperRef = useRef(null);
  const [ScrollLeft, setScrollLeft] = useState(false);
  const [ScrollRight, setScrollRight] = useState(false);

  useEffect(() => {
    scroll("right");
    const updateScrollButtons = () => {
      const wrapper = wrapperRef.current;
      if (!wrapper) return;

      setScrollLeft(wrapper.scrollLeft > 0);
      setScrollRight(
        wrapper.scrollLeft < wrapper.scrollWidth - wrapper.offsetWidth
      );
    };

    updateScrollButtons();
    const wrapper = wrapperRef.current;
    wrapper?.addEventListener("scroll", updateScrollButtons);

    return () => wrapper?.removeEventListener("scroll", updateScrollButtons);
  }, []);

  const scroll = (direction) => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const scrollAmount = wrapper.offsetWidth * 0.8;
    wrapper.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="overflow-visible relative w-full max-w-3xl min-h-fit flex justify-center py-10">
      {ScrollLeft && (
        <button
          onClick={() => scroll("left")}
          className="cursor-pointer opacity-70 transition hover:scale-105 hover:opacity-100 absolute -left-1 top-1/2 -translate-y-1/2 z-50 bg-primary-hover/60 shadow-lg rounded-full p-2"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-6 h-6 text-white " />
        </button>
      )}

      {ScrollRight && (
        <button
          onClick={() => scroll("right")}
          className="cursor-pointer opacity-70 transition hover:scale-105 hover:opacity-100 absolute -right-1 top-1/2 -translate-y-1/2 z-50 bg-primary-hover/60 shadow-lg rounded-full p-2"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-6 h-6 text-white " />
        </button>
      )}
      <div
        ref={wrapperRef}
        className="mask-x-from-85% px-6 overflow-hidden flex gap-2 justify-start no-scrollbar"
      >
        {children}
      </div>
    </section>
  );
};
