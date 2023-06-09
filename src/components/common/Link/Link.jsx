import PropTypes from 'prop-types';
import { StyledLink } from './Link.styled';

export function Link({
 to, children, end, className, style 
}) {
  return (
    <StyledLink className={className} style={style} end={end} to={to}>
      {children}
    </StyledLink>
  );
}



Link.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  end: PropTypes.bool,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};

