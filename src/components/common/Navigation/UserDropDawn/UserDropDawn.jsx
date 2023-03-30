import PropTypes from "prop-types";
import { Link } from "../../Link";
import { StyledUserDropDawn, StyledUl } from "./UserDropDawn.styled";

export const UserDropDawn = ({ isDropDawn, children }) => {
    return (
        <>
            <StyledUserDropDawn isDropDawn={isDropDawn}>
                <StyledUl>
                    <li>
                        <Link to="#">Your profile</Link>
                    </li>
                    <li>
                        <Link to="#">Your favorite</Link>
                    </li>
                    <li>
                        <Link to="#">Notification</Link>
                    </li>
                    <li>
                        <Link to="#">Help</Link>
                    </li>
                    <li>
                        <Link to="#">Upgrade</Link>
                    </li>
                    <li>
                        <Link to="#">Settings</Link>
                    </li>

                    <li>
                        {children}
                    </li>
                </StyledUl>
            </StyledUserDropDawn>
        </>
    );
};

UserDropDawn.propTypes = {
    isDropDawn: PropTypes.bool,
    children: PropTypes.node,
};
