import React, { FC, SVGProps } from 'react';

export const ArrowBackIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <>
      <svg
        width="18"
        height="12"
        viewBox="0 0 18 12"
        fill="none"
        cursor="pointer"
        {...props}
      >
        <path
          d="M18 5H3.83L7.41 1.41L6 0L0 6L6 12L7.41 10.59L3.83 7H18V5Z"
          fill="#FF751D"
        />
      </svg>
    </>
  );
};
