import PropTypes from "prop-types";

const Text = ({ variant = "body1", as: Tag = "p", children, className = "", ...props }) => {
  const variants = {
    body1: "font-normal text-[16px] md:text-[18px] tracking-[0px]", // Mobile: 16px, Desktop: 18px
    body2: "font-normal text-[14px] md:text-[16px] tracking-[0px]",

    subheading: "font-normal text-[20px] md:text-[30px] tracking-[0px]",

    tag: "font-normal text-[14px] md:text-[16px] tracking-[0px]",
    small: "font-normal text-[12px] md:text-[14px] tracking-[0px]",
    extraSmall: "font-normal text-[10px] md:text-[12px] tracking-[0px]"
  };

  return (
    <Tag className={`font-figtree ${variants[variant]} ${className}`} {...props}>
      {children}
    </Tag>
  );
};

Text.propTypes = {
  variant: PropTypes.oneOf(["body1", "body2", "subheading", "tag", "small", "extraSmall"]),
  as: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default Text;
