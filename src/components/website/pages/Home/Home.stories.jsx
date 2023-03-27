import { Home } from './Home';

export default {
  title: 'website/pages/Home',
  component: Home,
};

const Template = (args) => <Home {...args} />;

export const Default = Template.bind({});
Default.args = {};
