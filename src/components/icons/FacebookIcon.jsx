const FacebookIcon = ({ width = 17, height = 17, fill = "white" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="15"
      viewBox="0 0 16 15"
      fill="none"
    >
      <g clipPath="url(#clip0_362_2324)">
        <path
          d="M15.5019 7.54375C15.5019 3.6535 12.1437 0.5 8.00187 0.5C3.85812 0.500875 0.5 3.6535 0.5 7.54463C0.5 11.0595 3.24312 13.9732 6.82812 14.5017V9.57988H4.925V7.54463H6.83V5.9915C6.83 4.22662 7.95031 3.25187 9.66313 3.25187C10.4844 3.25187 11.3422 3.38925 11.3422 3.38925V5.12175H10.3962C9.46531 5.12175 9.17469 5.66512 9.17469 6.2225V7.54375H11.2541L10.9222 9.579H9.17375V14.5009C12.7587 13.9724 15.5019 11.0586 15.5019 7.54375Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_362_2324">
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

export default FacebookIcon;
