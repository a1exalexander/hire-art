<<<<<<< HEAD
import PropTypes from "prop-types";
import { Button } from "../Button/Button";
=======
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Button } from '../Button/Button';
>>>>>>> c013c29b6dba81e1af431a478aaf74d9259decf7
import {
  Arrow,
  UserActionBlock,
  UserMail,
  Avatar,
  UserName,
  UserInfo,
  UserActions,
  JobsArtists,
  Wrapper,
<<<<<<< HEAD
  FixedContainer,
  StyledNav,
  LogoContainer,
  LogoContainerMob,
} from "./Navigation.styled";
import avatar from "../../../assets/image/user_avatar.png";
import { Burger } from "../Burger/Burger";
import { Container } from "../Container";
import { Logo } from "../Logo/Logo";
import { Link } from "../Link";
import { useRef, useEffect, useState } from "react";
import { UserDropDawn } from "./UserDropDawn/UserDropDawn";

export const Navigation = () => {
  const user = {
    name: "Jennifer C.",
    email: "jennifer015@gmail.com",
  };
=======
} from './Navigation.styled';
import avatar from '../../../assets/image/user_avatar.png';
import { Burger } from '../Burger/Burger';
import { Container } from '../Container';

export function Navigation({ name, email }) {
  const [login, setLogin] = useState(false);
>>>>>>> c013c29b6dba81e1af431a478aaf74d9259decf7

  //* Добавить проверку на логинизацию =  добавить пропс isLoggedIn(PropTypes.bool) заменить isLoggedIn ?

  // открывает UserActions
  const [isLogin, setIsLogin] = useState(false);
  const handleLogin = () => {
    setIsLogin(true);
  };
  // Logout
  const handleLogout = () => {
    setIsLogin(false);
  };
  // обработчик для нажатия кнопки Login, который сбрасывает состояние isDropDawnOpen на false, когда жмем на кнопку Login снова, компонент UserDropDawn не появляется автоматически.
  const handleLoginClick = () => {
    SetIsDropDawnOpen(false);
    handleLogin();
  };

  //смена стилей при scroll
  const headerRef = useRef(null);
  useEffect(() => {
    const scrollHeader = () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        headerRef.current.classList.add("scroll");
      } else {
        headerRef.current.classList.remove("scroll");
      }
    };
    window.addEventListener("scroll", scrollHeader);
    return () => {
      window.removeEventListener("scroll", scrollHeader);
    };
  }, []);

  // Burger
  const [isOpen, setIsOpen] = useState(false);
  const handleBurgerClick = () => {
    setIsOpen(!isOpen);
  };

  // DropDawn
  const [isDropDawnOpen, SetIsDropDawnOpen] = useState(false);
  const handleUserActionClick = () => {
    SetIsDropDawnOpen(!isDropDawnOpen);
  };

  // click Outside
  const dropDawnRef = useRef(null);
  useEffect(() => {
    const handler = (e) => {
      if (!dropDawnRef.current.contains(e.target)) {
        SetIsDropDawnOpen(false);
        console.log(dropDawnRef.current);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <Container>
<<<<<<< HEAD
      <FixedContainer ref={headerRef}>
        {isLogin ? null : (
          <LogoContainer>
            <Logo name="logoHeader"></Logo>
          </LogoContainer>
        )}
        <StyledNav isLogin={isLogin} isOpen={isOpen} ref={dropDawnRef}>
          <LogoContainerMob>
            <Logo name="logoHeader"></Logo>
          </LogoContainerMob>
          <JobsArtists>
            <Link to="/">Jobs</Link>
            <Link to="/">Artists</Link>
          </JobsArtists>
          {isLogin ? (
            <Wrapper>
              <UserActionBlock onClick={handleUserActionClick} isDropDawnOpen={isDropDawnOpen}>
                <Avatar src={avatar} />
                <UserInfo>
                  <UserName>{user.name}</UserName>
                  <UserMail>{user.email}</UserMail>
                </UserInfo>
                <Arrow name="arrowDown"></Arrow>
              </UserActionBlock>
              {isDropDawnOpen && (
                <UserDropDawn >
                  <Button
                    icon="singOut"
                    iconPosition="right"
                    onClick={handleLogout}
                    variant="subtle"
                  >
                    Sing out
                  </Button>
                </UserDropDawn>
              )}
            </Wrapper>
          ) : (
            <UserActions>
              <Button onClick={handleLoginClick} variant="subtle">
                Login
              </Button>
              <Button onClick={handleLoginClick}>Sign up</Button>
            </UserActions>
          )}
        </StyledNav>
      </FixedContainer>
      <Burger onClick={handleBurgerClick} isOpen={isOpen}></Burger>
=======
      <StyledContainer login={login} isOpen={isOpen}>
        <JobsArtists>
          <Button
            onClick={() => {}}
            variant="subtle"
            size={isOpen ? 'big' : 'standart'}
          >
            Jobs
          </Button>
          <Button
            onClick={() => {}}
            variant="subtle"
            size={isOpen ? 'big' : 'standart'}
          >
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
              <Arrow name="arrowDown" />
            </UserActionBlock>
          </Wrapper>
        ) : (
          <UserActions>
            <Button
              onClick={handleLogin}
              variant="subtle"
              size={isOpen ? 'big' : 'standart'}
            >
              Login
            </Button>
            <Button onClick={handleLogin} size={isOpen ? 'big' : 'standart'}>
              Sign up
            </Button>
          </UserActions>
        )}
      </StyledContainer>
      <Burger onClick={handleBurgerClick} isOpen={isOpen} />
>>>>>>> c013c29b6dba81e1af431a478aaf74d9259decf7
    </Container>
  );
}

Navigation.propTypes = {
<<<<<<< HEAD
  // isLoggedIn: PropTypes.bool,
=======
  name: PropTypes.string,
  email: PropTypes.string,
>>>>>>> c013c29b6dba81e1af431a478aaf74d9259decf7
};
