import { Logo } from '../../../common/Logo';
import {
 Policy, Section, LinkPolicy, SectionWrapper 
} from './Footer.styled';
import { SocialButton } from '../../../common/SocialButton';
import { Container } from '../../../common/Container';

export function Footer() {
  return (
    <SectionWrapper>
      <Container>
        <Section>
          <Logo variant="footer" />
          <Policy className="policy">
            <LinkPolicy href="/" alt="cookie">
              Cookie policy
            </LinkPolicy>
            <LinkPolicy href="/" alt="coPrivacyokie">
              Privacy policy
            </LinkPolicy>
            <LinkPolicy href="/" alt="service">
              Term of service
            </LinkPolicy>
          </Policy>
          <div>
            <SocialButton name="gmail" />
            <SocialButton name="facebook" />
            <SocialButton name="insta" />
            <SocialButton name="linkedin" />
            <SocialButton name="telegram" />
          </div>
        </Section>
      </Container>
    </SectionWrapper>
  );
}
