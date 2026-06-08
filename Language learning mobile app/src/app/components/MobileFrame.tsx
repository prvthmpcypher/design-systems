import { ReactNode } from "react";

interface MobileFrameProps {
  children: ReactNode;
}

export function MobileFrame({ children }: MobileFrameProps) {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md h-[844px] bg-white rounded-[3rem] shadow-2xl overflow-hidden relative border-8 border-gray-800">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-gray-800 rounded-b-3xl z-50" />
        <div className="h-full overflow-auto">
          {children}
        </div>
      </div>
    </div>
  );
}
