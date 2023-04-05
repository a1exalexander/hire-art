import { Home } from './Home';

export default {
  title: 'website/pages/Home',
  component: Home,
};

function Template(args) {
  return <Home {...args} />;
}

export const Default = Template.bind({});
Default.args = {};
