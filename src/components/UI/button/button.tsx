'use client'

import clsx from 'clsx';
import React from 'react'

interface IButton {
     size?: "large" | "medium" | "small";
     variants?: "primary" | "outlined" | "text";
     fullwidth?: boolean;
     children: React.ReactNode;
     rounded?: boolean;
     className?:string;
     color?: "primary" | "secondary" | "purple",
     disable?: boolean,
     click?: any
}

const Button = ({ children, size, variants, fullwidth, rounded, color, className, disable, click }: IButton) => {
     return (
          <button className={clsx(
               `py-2 active:scale-105 flex items-center gap-1 ${className}`,
               {
                    "w-full": fullwidth === true,
                    "justify-center": variants === "primary",
                    "border-[1px] !bg-transparent text-[#333333]": variants === "outlined",
                    "": variants === "text",
                    "text-sm px-2 py-[2px] rounded-md hover:bg-light text-[#333333]": size === "small",
                    "text-base px-4 py-2.5": size === "medium",
                    "px-8 py-3": size === "large",
                    "rounded-[10px]": rounded === true,
                    "bg-primary text-white border-primary justify-center": color === 'primary',
                    "bg-secondary text-black border-secondary justify-center": color === 'secondary',
               }
          )}
          disabled={disable}
          onClick={click}
          >
               {children}
          </button>
     )
}

export default Button