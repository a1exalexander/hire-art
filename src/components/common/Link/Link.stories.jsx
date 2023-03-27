import { Link } from './Link';

export default {
  title: 'components/Link',
  component: Link,
};

const Template = (args) => <Link {...args} />;

export const Default = Template.bind({});
Default.args = {
  to: '/',
  children: 'Link',
};
