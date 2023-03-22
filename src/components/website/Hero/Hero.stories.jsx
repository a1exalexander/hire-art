import { Hero } from './Hero';

export default {
  title: 'website/Hero',
  component: Hero,
};

const Template = (args) => <Hero {...args} />;

export const Default = Template.bind({});
Default.args = {};
