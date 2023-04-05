import { Market } from './Market';

export default {
  title: 'website/components/Market',
  component: Market,
};

function Template(args) {
  return <Market {...args} />;
}

export const Default = Template.bind({});
Default.args = {};
