import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { ReactNode } from "react";

interface SlidingDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  direction: "top" | "bottom" | "left" | "right" | "diagonal-tl" | "diagonal-br";
  children: ReactNode;
  title: string;
}

export function SlidingDrawer({ isOpen, onClose, direction, children, title }: SlidingDrawerProps) {
  const getVariants = () => {
    switch (direction) {
      case "top":
        return {
          hidden: { y: "-100%" },
          visible: { y: 0 },
        };
      case "bottom":
        return {
          hidden: { y: "100%" },
          visible: { y: 0 },
        };
      case "left":
        return {
          hidden: { x: "-100%" },
          visible: { x: 0 },
        };
      case "right":
        return {
          hidden: { x: "100%" },
          visible: { x: 0 },
        };
      case "diagonal-tl":
        return {
          hidden: { x: "-100%", y: "-100%", opacity: 0 },
          visible: { x: 0, y: 0, opacity: 1 },
        };
      case "diagonal-br":
        return {
          hidden: { x: "100%", y: "100%", opacity: 0 },
          visible: { x: 0, y: 0, opacity: 1 },
        };
    }
  };

  const getPositionClasses = () => {
    switch (direction) {
      case "top":
        return "top-0 left-0 right-0 h-64";
      case "bottom":
        return "bottom-0 left-0 right-0 h-64";
      case "left":
        return "left-0 top-0 bottom-0 w-80";
      case "right":
        return "right-0 top-0 bottom-0 w-80";
      case "diagonal-tl":
        return "top-0 left-0 w-96 h-96 rounded-br-3xl";
      case "diagonal-br":
        return "bottom-0 right-0 w-96 h-96 rounded-tl-3xl";
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
            onClick={onClose}
          />
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={getVariants()}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className={`fixed ${getPositionClasses()} bg-gradient-to-br from-gray-900 to-gray-800 shadow-2xl z-50 overflow-auto`}
          >
            <div className="p-6 h-full flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-white">{title}</h2>
                <button
                  onClick={onClose}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="flex-1 overflow-auto text-gray-300">
                {children}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
