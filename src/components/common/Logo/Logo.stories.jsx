
import { Logo } from './Logo';

export default {
  title: 'components/Logo',
  component: Logo,
};

const Template = (args) => <Logo {...args} />;
const TemplateDark = (args) => (
  <div style={{ backgroundColor: '#07063D', padding: '32px' }}>
    <Logo {...args} />
  </div>
)

export const LogoComponent = ({ variant, ...args }) => {
  if (variant === 'header') {
    return <Template {...args} />;
  } else {
    return <TemplateDark {...args} />;
  }
}

export const Footer = TemplateDark.bind({});
Footer.args = {
  variant: 'footer',
};
