import { Best } from './Best';

export default {
  title: 'Website/Best',
  component: Best,
};

const Template = (args) => <Best {...args} />;

export const Default = Template.bind({});
Default.args = {};
