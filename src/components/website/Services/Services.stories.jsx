import { Services } from './Services';

export default {
  title: 'website/Services',
  component: Services,
};

const Template = (args) => <Services {...args} />;

export const Default = Template.bind({});
Default.args = {};
