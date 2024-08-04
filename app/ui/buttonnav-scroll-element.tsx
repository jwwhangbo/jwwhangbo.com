import React, { ReactNode, useRef } from "react";

interface ButtonNavScrollElementProps {
  children: ReactNode;
  className?: string;
  onClickLeft: () => void;
  onClickRight: () => void;
}

const ButtonNavScrollElement: React.FC<ButtonNavScrollElementProps> = ({
  children,
  className,
  onClickLeft,
  onClickRight
}) => {
  return (
    <div className={`flex relative ${className}`}>
      <div className="absolute w-[20%] md:w-[10%] flex items-center bottom-0 top-0 justify-center lg:opacity-0 transition ease-in-out duration-500 hover:opacity-100 z-10">
        <button onClick={onClickLeft}>
          <div className="border-solid border-t-2 border-r-2 border-black p-2 -rotate-[135deg]"></div>
        </button>
      </div>
      {children}
      <div className="absolute w-[20%] md:w-[10%] flex items-center justify-center bottom-0 top-0 right-0 lg:opacity-0 transition ease-in-out duration-500 hover:opacity-100">
        <button onClick={onClickRight}>
          <div className="border-solid border-t-2 border-l-2 border-black p-2 rotate-[135deg]"></div>
        </button>
      </div>
    </div>
  );
};

export { ButtonNavScrollElement };
