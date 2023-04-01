import { FAQ } from './FAQ';

export default {
  title: 'website/components/FAQ',
  component: FAQ,
};

function Template(args) {
  return <FAQ {...args} />;
}

export const Default = Template.bind({});
Default.args = {
  title: 'Frequently Asked Questions',
  description: 'Don`t see your question? email ',
  link: 'help@hireart.com',
};
