import React, { FC, SVGProps } from 'react';

export const SliderRightIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
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
        <path d="M1 1L5 6L1 11" stroke="#FF751D" strokeWidth="2" />
      </svg>
    </>
  );
};
