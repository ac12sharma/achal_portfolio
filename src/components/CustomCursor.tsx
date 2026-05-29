import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
  const cursorX = useMotionValue(-200);
  const cursorY = useMotionValue(-200);

  // Dot: nearly instant
  const dotX = useSpring(cursorX, { damping: 50, stiffness: 1500, mass: 0.2 });
  const dotY = useSpring(cursorY, { damping: 50, stiffness: 1500, mass: 0.2 });
  // Ring: noticeably lags behind
  const ringX = useSpring(cursorX, { damping: 28, stiffness: 220, mass: 0.8 });
  const ringY = useSpring(cursorY, { damping: 28, stiffness: 220, mass: 0.8 });

  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [visible, setVisible] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // Only activate on real pointer devices — not phones/tablets
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    setEnabled(true);

    const onMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setVisible(true);
    };
    const onOver = (e: MouseEvent) => {
      const el = (e.target as HTMLElement).closest(
        "a, button, [role='button'], input, textarea, select, label, [tabindex]"
      );
      setHovered(!!el);
    };
    const onDown = () => setClicked(true);
    const onUp = () => setClicked(false);
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      {/* Outer ring — springs behind the real cursor */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9998]"
        style={{ x: ringX, y: ringY }}
      >
        <motion.div
          animate={{
            width: clicked ? 24 : hovered ? 54 : 38,
            height: clicked ? 24 : hovered ? 54 : 38,
            borderColor: hovered
              ? "rgba(96,165,250,0.8)"
              : "rgba(96,165,250,0.45)",
            opacity: visible ? 1 : 0,
          }}
          transition={{ type: "spring", damping: 22, stiffness: 350, mass: 0.5 }}
          className="rounded-full border -translate-x-1/2 -translate-y-1/2"
        />
      </motion.div>

      {/* Inner dot — tracks cursor precisely */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999]"
        style={{ x: dotX, y: dotY }}
      >
        <motion.div
          animate={{
            width: hovered ? 5 : 8,
            height: hovered ? 5 : 8,
            opacity: visible ? (clicked ? 0.5 : 1) : 0,
          }}
          transition={{ duration: 0.12 }}
          className="rounded-full bg-primary -translate-x-1/2 -translate-y-1/2"
        />
      </motion.div>
    </>
  );
};

export default CustomCursor;
