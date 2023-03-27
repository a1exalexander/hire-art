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

export const Header = Template.bind({});
Header.args = {
  variant: 'header',
};
export const Footer = TemplateDark.bind({});
Footer.args = {
  variant: 'footer',
};
