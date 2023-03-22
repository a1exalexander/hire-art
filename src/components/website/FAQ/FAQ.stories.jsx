import { FAQ } from './FAQ';

export default {
  title: 'website/FAQ',
  component: FAQ,
};

const Template = (args) => <FAQ {...args} />;

export const Default = Template.bind({});
Default.args = {};
