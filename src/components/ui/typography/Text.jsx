import PropTypes from 'prop-types';

const Text = ({ 
  variant = 'body1',
  as: Tag = 'p',
  children,
  className = '',
  ...props
}) => {
  const variants = {
    // Primary Body Styles
    body1: 'font-figtree font-normal text-[18px] tracking-[0px]',
    body2: 'font-figtree font-normal text-[16px] tracking-[0px]',
    
    // Sub Styles
    subheading: 'font-figtree font-normal text-[30px] tracking-[0px]',
    
    // Special Cases
    tag: 'font-figtree font-normal text-[16px] tracking-[0px]',
    small: 'font-figtree font-normal text-[14px] tracking-[0px]',
    extraSmall: 'font-figtree font-normal text-[12px] tracking-[0px]',
    
    // Alternative Body Styles (from second guide)
    altBody1: 'font-figtree font-normal text-[18px] tracking-[0px]',
    altBody2: 'font-figtree font-normal text-[14px] tracking-[0px]',
    altSubheading: 'font-figtree font-normal text-[14px] tracking-[0px]',
    altTag: 'font-figtree font-normal text-[12px] tracking-[0px]',
    altSmall: 'font-figtree font-normal text-[14px] tracking-[0px]',
    altExtraSmall: 'font-figtree font-normal text-[12px] tracking-[0px]'
  };

  return (
    <Tag 
      className={`${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
};

Text.propTypes = {
  variant: PropTypes.oneOf([
    'body1', 'body2', 'subheading', 'tag', 'small', 'extraSmall',
    'altBody1', 'altBody2', 'altSubheading', 'altTag', 'altSmall', 'altExtraSmall'
  ]),
  as: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default Text;