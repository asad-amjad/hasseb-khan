const XIcon = ({ width = 17, height = 17, fill = "white" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="15"
      viewBox="0 0 16 15"
      fill="none"
    >
      <g clipPath="url(#clip0_362_2328)">
        <path
          d="M12.3125 1.15625H14.6131L9.58813 6.5305L15.5 13.8438H10.8716L7.24625 9.4075L3.09781 13.8438H0.79625L6.17094 8.095L0.5 1.15625H5.24656L8.52312 5.21012L12.3125 1.15625ZM11.5062 12.5557H12.7812L4.55281 2.37687H3.18594L11.5062 12.5557Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_362_2328">
          <rect
            width="15"
            height="14"
            fill={fill}
            transform="translate(0.5 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default XIcon;
