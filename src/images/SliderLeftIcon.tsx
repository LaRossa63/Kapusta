import React, { FC, SVGProps } from 'react';

export const SliderLeftIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <>
      <svg
        width="7"
        height="12"
        viewBox="0 0 7 12"
        fill="none"
        cursor="pointer"
        {...props}
      >
        <path d="M6 1L2 6L6 11" stroke="#FF751D" stroke-width="2" />
      </svg>
    </>
  );
};
