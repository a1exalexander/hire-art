import { Best } from './Best';

export default {
  title: 'website/components/Best',
  component: Best,
};

function Template(args) {
  return <Best {...args} />;
}

export const Default = Template.bind({});
Default.args = {};
