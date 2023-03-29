import PropTypes from "prop-types";
import { Button } from "../Button/Button";
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

  //* Добавить проверку на логинизацию =  добавить пропс isLoggedIn(PropTypes.bool) заменить isLoggedIn ?

  // открывает UserActions
  const [isLogin, setIsLogin] = useState(false);
  const handleLogin = () => {
    setIsLogin(true);
  };
  const handleLogout = () => {
    setIsLogin(false);
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


  return (
    <Container>
      <FixedContainer ref={headerRef}>
        {isLogin ? null : (
          <LogoContainer>
            <Logo name="logoHeader"></Logo>
          </LogoContainer>
        )}
        <StyledNav isLogin={isLogin} isOpen={isOpen}>
          <LogoContainerMob>
            <Logo name="logoHeader"></Logo>
          </LogoContainerMob>
          <JobsArtists>
            <Link to="/">
              Jobs
            </Link>
            <Link to="/">Artists</Link>
          </JobsArtists>
          {isLogin ? (
            <Wrapper>
              <UserActionBlock onClick={handleUserActionClick}>
                <Avatar src={avatar} />
                <UserInfo>
                  <UserName>{user.name}</UserName>
                  <UserMail>{user.email}</UserMail>
                </UserInfo>
                <Arrow name="arrowDown"></Arrow>
              </UserActionBlock>
              {isDropDawnOpen && (
                <UserDropDawn>
                  <Button onClick={handleLogout} variant="subtle">
                    Sing out
                  </Button>
                </UserDropDawn>
              )}
            </Wrapper>
          ) : (
            <UserActions>
              <Button onClick={handleLogin} variant="subtle">
                Login
              </Button>
              <Button onClick={handleLogin}>Sign up</Button>
            </UserActions>
          )}
        </StyledNav>
      </FixedContainer>
      <Burger onClick={handleBurgerClick} isOpen={isOpen}></Burger>
    </Container>
  );
};

Navigation.propTypes = {
  // isLoggedIn: PropTypes.bool,
};
