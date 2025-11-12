import { ChevronLeft, ChevronRight } from "lucide-react";

type SideButtonProps = {
  side: "left" | "right"; // only these two allowed
  onClick?: () => void; // optional click handler
};

const SideButton: React.FC<SideButtonProps> = ({ side, onClick }) => {
  const isLeft = side === "left";

  return (
    <div
      onClick={onClick}
      className={`
        relative w-10 h-full flex items-center justify-${
          isLeft ? "start" : "end"
        }
        cursor-pointer overflow-hidden group
      `}
    >
      {/* Gradient overlay (fades in on hover) */}
      <div
        className={`
          absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500
          ${
            isLeft
              ? "bg-linear-to-r from-amber-500 dark:from-white/40 to-transparent"
              : "bg-linear-to-l from-amber-500 dark:from-white/40 to-transparent"
          }
        `}
      />

      {/* Chevron icon */}
      <div className="relative z-10 text-black dark:text-white transition-transform duration-300 group-hover:scale-110">
        {isLeft ? <ChevronLeft size={36} /> : <ChevronRight size={36} />}
      </div>
    </div>
  );
};

export default SideButton;
