import { Hero } from './Hero';

export default {
  title: 'website/components/Hero',
  component: Hero,
};

function Template(args) {
  return <Hero {...args} />;
}

export const Default = Template.bind({});
Default.args = {};
