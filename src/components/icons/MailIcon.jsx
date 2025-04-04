const MailIcon = ({ width = 17, height = 17, fill = "white" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
    >
      <g clipPath="url(#clip0_362_2315)">
        <path
          d="M0.5 4.5C0.5 3.96957 0.710714 3.46086 1.08579 3.08579C1.46086 2.71071 1.96957 2.5 2.5 2.5H14.5C15.0304 2.5 15.5391 2.71071 15.9142 3.08579C16.2893 3.46086 16.5 3.96957 16.5 4.5V12.5C16.5 13.0304 16.2893 13.5391 15.9142 13.9142C15.5391 14.2893 15.0304 14.5 14.5 14.5H2.5C1.96957 14.5 1.46086 14.2893 1.08579 13.9142C0.710714 13.5391 0.5 13.0304 0.5 12.5V4.5ZM2.5 3.5C2.23478 3.5 1.98043 3.60536 1.79289 3.79289C1.60536 3.98043 1.5 4.23478 1.5 4.5V4.717L8.5 8.917L15.5 4.717V4.5C15.5 4.23478 15.3946 3.98043 15.2071 3.79289C15.0196 3.60536 14.7652 3.5 14.5 3.5H2.5ZM15.5 5.883L10.792 8.708L15.5 11.605V5.883ZM15.466 12.759L9.826 9.288L8.5 10.083L7.174 9.288L1.534 12.758C1.59083 12.9708 1.71632 13.1589 1.89099 13.2931C2.06566 13.4272 2.27975 13.5 2.5 13.5H14.5C14.7201 13.5 14.9341 13.4274 15.1088 13.2934C15.2834 13.1595 15.409 12.9716 15.466 12.759ZM1.5 11.605L6.208 8.708L1.5 5.883V11.605Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_362_2315">
          <rect
            width="16"
            height="16"
            fill={fill}
            transform="translate(0.5 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default MailIcon;
