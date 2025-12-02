import { useRef, useEffect } from "react";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  rootMargin?: string;
  threshold?: number | number[];
  transitionDelay?: number;
}

const Reveal = ({
  children,
  className = "",
  rootMargin = "0px 0px -2% 0px",
  threshold = 0.15,
  transitionDelay = 0,
}: RevealProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
          } else {
            entry.target.classList.remove("reveal-visible");
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={{ transitionDelay: `${transitionDelay}s` }}
    >
      {children}
    </div>
  );
};

export default Reveal;
