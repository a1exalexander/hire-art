import PropTypes from "prop-types";
import { Button } from "../Button/Button";
import {
  Arrow,
  StyledContainer,
  UserActionBlock,
  UserMail,
  Avatar,
  UserName,
  UserInfo,
  UserActions,
  JobsArtists,
} from "./Navigation.styled";
import avatar from "../../../assets/image/user_avatar.png";
import { useState } from "react";
import { Burger } from "../Burger/Burger";


export const Navigation = ({ name, email }) => {
  const [login, setLogin] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  const handleBurgerClick = () => {
    setIsOpen(!isOpen);
  };

  const handleLogin = () => {
    setLogin(true);
  };

  return (
    <>
      <StyledContainer isOpen={isOpen}>
        <JobsArtists>
          <Button onClick={() => { }} variant="subtle">
            Jobs
          </Button>
          <Button onClick={() => { }} variant="subtle">
            Artists
          </Button>
        </JobsArtists>
        {login ? (
          <UserActionBlock>
            <Avatar src={avatar} alt={name} />
            <UserInfo>
              <UserName>{name}</UserName>
              <UserMail>{email}</UserMail>
            </UserInfo>
            <Arrow name="arrowDown"></Arrow>
          </UserActionBlock>
        ) : (
          <UserActions>
            <Button onClick={handleLogin} variant="subtle">
              Login
            </Button>
            <Button onClick={handleLogin}>Sign up</Button>
          </UserActions>
        )}
      </StyledContainer>
      <Burger onClick={handleBurgerClick} isOpen={isOpen}></Burger>
    </>
  );
};

Navigation.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

Navigation.defaultProps = {
  name: "Agneshka",
  email: "example@gmaal.com",
};

