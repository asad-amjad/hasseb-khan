import PropTypes from 'prop-types';

const Heading = ({ 
  as: Tag = 'h1', 
  children, 
  className = '',
  variant = 'primary', // 'primary' or 'alternative'
  ...props 
}) => {
  const primaryVariants = {
    h1: 'font-figtree font-extrabold text-[56px] tracking-[0px] mb-6',
    h2: 'font-figtree font-extrabold text-[46px] tracking-[0px] mb-5',
    h3: 'font-figtree font-normal text-[34px] tracking-[0px] mb-4',
    h4: 'font-figtree font-normal text-[30px] tracking-[0px] mb-4',
    h5: 'font-figtree font-normal text-[26px] tracking-[0px] mb-3',
    h6: 'font-figtree font-medium text-[22px] tracking-[0px] mb-3'
  };

  const alternativeVariants = {
    h1: 'font-figtree font-normal text-[36px] tracking-[0px] mb-6',
    h2: 'font-figtree font-normal text-[30px] tracking-[0px] mb-5',
    h3: 'font-figtree font-normal text-[20px] tracking-[0px] mb-4',
    h4: 'font-figtree font-normal text-[20px] tracking-[0px] mb-4',
    h5: 'font-figtree font-normal text-[20px] tracking-[0px] mb-3',
    h6: 'font-figtree font-medium text-[14px] tracking-[0px] mb-3'
  };

  const variants = variant === 'alternative' ? alternativeVariants : primaryVariants;

  return (
    <Tag 
      className={`${variants[Tag]} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
};

Heading.propTypes = {
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  variant: PropTypes.oneOf(['primary', 'alternative']),
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default Heading;