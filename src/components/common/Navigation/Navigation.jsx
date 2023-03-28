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

export const Navigation = () => {
  const user = {
    name: "Jennifer C.",
    email: "jennifer015@gmail.com",
  }
  const [login, setLogin] = useState(false);
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

  //* Добавить проверку на логинизацию =  добавить пропс isLoggedIn(PropTypes.bool) 'login' заменить isLoggedIn ?

  const handleLogin = () => {
    setLogin(true);
  };

  const [isOpen, setIsOpen] = useState(false);
  const handleBurgerClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <FixedContainer ref={headerRef}>
        {login ? null : <LogoContainer>
          <Logo name="logoHeader"></Logo>
        </LogoContainer>}
        <StyledNav login={login} isOpen={isOpen}>
          <LogoContainerMob>
            <Logo name="logoHeader"></Logo>
          </LogoContainerMob>
          <JobsArtists>
            <Link to="/" isOpen={isOpen} className={isOpen ? "linkOpen" : ""}>Jobs</Link>
            <Link to="/">Artists</Link>
          </JobsArtists>
          {login ? (
            <Wrapper>
              <UserActionBlock>
                <Avatar src={avatar} alt={user.name} />
                <UserInfo>
                  <UserName>{user.name}</UserName>
                  <UserMail>{user.email}</UserMail>
                </UserInfo>
                <Arrow name="arrowDown"></Arrow>
              </UserActionBlock>
            </Wrapper>
          ) : (
            <UserActions>
              <Button
                onClick={handleLogin}
                variant="subtle"
                size={isOpen ? "big" : "standart"}
              >
                Login
              </Button>
              <Button onClick={handleLogin} size={isOpen ? "big" : "standart"}>
                Sign up
              </Button>
            </UserActions>
          )}
        </StyledNav>
      </FixedContainer>
      <Burger onClick={handleBurgerClick} isOpen={isOpen}></Burger>
    </Container>
  );
};

Navigation.propTypes = {
};

