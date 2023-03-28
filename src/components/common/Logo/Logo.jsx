import { Icon } from "../Icon";
import { LogoHeader, LogoFooter } from "./Logo.styled";
import PropTypes from "prop-types";


export const Logo = ({ variant }) => {
  return (
    <>
      {variant === "header" && (
        <LogoHeader>
          <Icon name="logoHeader" />
        </LogoHeader>
      )}
      {variant === "footer" && (
        <LogoFooter>
          <Icon name="logoFooter" />
        </LogoFooter>
      )}
    </>
  );
};

Logo.propTypes = {
  variant: PropTypes.oneOf(["header", "footer"]).isRequired,
};

Logo.defaultProps = {
  variant: "header",
}
