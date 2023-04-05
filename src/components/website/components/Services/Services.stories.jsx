import { Services } from './Services';

export default {
  title: 'website/components/Services',
  component: Services,
};

function Template(args) {
  return <Services {...args} />;
}

export const Default = Template.bind({});
Default.args = {};
