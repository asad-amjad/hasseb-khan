import PropTypes from "prop-types";

const Heading = ({ as: Tag = "h1", children, className = "", ...props }) => {
  const headingStyles = {
    h1: "font-extrabold text-[36px] md:text-[56px] tracking-[0px]", // Mobile: 36px, Desktop: 56px
    h2: "font-extrabold text-[30px] md:text-[46px] tracking-[0px]",
    h3: "font-regular text-[24px] md:text-[34px] tracking-[0px]",
    h4: "font-regular text-[20px] md:text-[30px] tracking-[0px]",
    h5: "font-regular text-[18px] md:text-[26px] tracking-[0px]",
    h6: "font-medium text-[16px] md:text-[22px] tracking-[0px]",
  };

  return (
    <Tag
      className={`font-figtree leading-tight ${headingStyles[Tag]} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
};

Heading.propTypes = {
  as: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]),
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Heading;
