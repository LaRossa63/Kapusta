import React, { FC, SVGProps } from 'react';

export const GraphIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <g clipPath="url(#clip0_14_24)">
          <path
            d="M5 9.2H8V19H5V9.2ZM10.6 5H13.4V19H10.6V5ZM16.2 13H19V19H16.2V13Z"
            fill="#52555F"
          />
        </g>
        <defs>
          <clipPath id="clip0_14_24">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </>
  );
};
