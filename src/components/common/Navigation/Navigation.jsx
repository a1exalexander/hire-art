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
  Wrapper,
} from "./Navigation.styled";
import avatar from "../../../assets/image/user_avatar.png";
import { useState } from "react";
import { Burger } from "../Burger/Burger";


export const Navigation = ({ name, email }) => {

  const [login, setLogin] = useState(false);

  //* Добавить проверку на логинизацию =  добавить пропс isLoggedIn(PropTypes.bool) 'login' заменить isLoggedIn ? 

  const handleLogin = () => {
    setLogin(true);
  };

  const [isOpen, setIsOpen] = useState(false);
  const handleBurgerClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <StyledContainer login={login} isOpen={isOpen}>
        <JobsArtists>
          <Button onClick={() => { }} variant="subtle" size={isOpen ? 'big' : 'standart'} >
            Jobs
          </Button>
          <Button onClick={() => { }} variant="subtle" size={isOpen ? 'big' : 'standart'}>
            Artists
          </Button>
        </JobsArtists>

        {login ? (
          <Wrapper>
            <UserActionBlock>
              <Avatar src={avatar} alt={name} />
              <UserInfo>
                <UserName>{name}</UserName>
                <UserMail>{email}</UserMail>
              </UserInfo>
              <Arrow name="arrowDown"></Arrow>
            </UserActionBlock>
          </Wrapper>
        ) : (
          <UserActions>
            <Button onClick={handleLogin} variant="subtle" size={isOpen ? 'big' : 'standart'}>
              Login
            </Button>
            <Button onClick={handleLogin} size={isOpen ? 'big' : 'standart'}>Sign up</Button>
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
  name: "Jennifer C.",
  email: "jennifer015@gmail.com",
};

