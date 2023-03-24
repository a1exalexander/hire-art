import { Logo } from "../../common/Logo";
import { SocialButton } from '../../common/SocialButton';
import { Policy, Section, LinkPolicy } from './Footer.styled';

export const Footer = () => {

  return (
    <Section>
      <Logo variant="footer"></Logo>
      <Policy className="policy">
        <LinkPolicy href="/" alt='cookie'>Cookie policy</LinkPolicy>
        <LinkPolicy href="/" alt='coPrivacyokie'>Privacy policy</LinkPolicy>
        <LinkPolicy href="/" alt='service'>Term of service</LinkPolicy>
      </Policy>


      <div className="socialList">
        <SocialButton name='gmail'></SocialButton>
        <SocialButton name='facebook'></SocialButton>
        <SocialButton name='insta'></SocialButton>
        <SocialButton name='linkedin'></SocialButton>
        <SocialButton name='telegram'></SocialButton>
      </div>
    </Section>
  );
};

