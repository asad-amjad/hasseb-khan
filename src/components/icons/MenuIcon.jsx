const MenuIcon = ({ width = 30, height = 17, fill = "#111111" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 30 17"
      fill="none"
    >
      <rect y="0.179688" width="30" height="1.5" rx="0.75" fill={fill} />
      <rect y="7.67969" width="30" height="1.5" rx="0.75" fill={fill} />
      <rect y="15.1797" width="20" height="1.5" rx="0.75" fill={fill} />
    </svg>
  );
};

export default MenuIcon;
