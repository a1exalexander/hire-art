import { Footer } from './Footer';

export default {
  title: 'website/components/Footer',
  component: Footer,
};

function Template(args) {
  return <Footer {...args} />;
}

export const Default = Template.bind({});
Default.args = {};
