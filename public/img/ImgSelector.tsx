import React from 'react';

interface SVG {
  id: string;
}

const ImgSelector = ({ id }: SVG) => {
  switch (id) {
    case 'logo':
      return (
        <svg
          width="31"
          height="20"
          viewBox="0 0 31 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.5858 8.36396C10.8047 9.14501 10.8047 10.4113 11.5858 11.1924L15.4749 15.0815L11.1924 19.364C10.4113 20.145 9.14501 20.145 8.36396 19.364L0.585786 11.5858C-0.195262 10.8047 -0.195262 9.53841 0.585786 8.75736L8.36396 0.979186C9.14501 0.198137 10.4113 0.198137 11.1924 0.979186L15.0815 4.86827L11.5858 8.36396ZM15.0815 4.86827L19.364 0.585786C20.145 -0.195262 21.4113 -0.195262 22.1924 0.585786L29.9706 8.36396C30.7516 9.14501 30.7516 10.4113 29.9706 11.1924L22.1924 18.9706C21.4113 19.7516 20.145 19.7516 19.364 18.9706L15.4749 15.0815L18.9706 11.5858C19.7516 10.8047 19.7516 9.53841 18.9706 8.75736L15.0815 4.86827Z"
            fill="url(#paint0_linear_6950_183)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_6950_183"
              x1="5.67172"
              y1="5.77832"
              x2="13.1717"
              y2="13.7783"
              gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFAC28" />
              <stop offset="1" stopColor="#FFC328" />
            </linearGradient>
          </defs>
        </svg>
      );
    case 'profil_logo':
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.4">
            <path
              d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
              stroke="#2A2F37"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
              stroke="#2A2F37"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      );
    case 'admin':
      return (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            opacity="0.4"
            d="M0.621094 18V15.9492L1.83984 15.7734L7.26562 0.9375H10.7695L16.1602 15.7734L17.3789 15.9492V18H11.5664V15.9492L12.75 15.7383L12 13.3945H6L5.25 15.7383L6.43359 15.9492V18H0.621094ZM6.80859 10.875H11.1914L9.19922 5.02734L9.03516 4.51172H8.96484L8.78906 5.0625L6.80859 10.875Z"
            fill="#2A2F37"
          />
        </svg>
      );

    default:
      return <svg />;
  }
};

export default ImgSelector;
