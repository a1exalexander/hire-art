import { Market } from './Market';

export default {
  title: 'website/components/Market',
  component: Market,
};

const Template = (args) => <Market {...args} />;

export const Default = Template.bind({});
Default.args = {};
