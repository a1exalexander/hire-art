import { Slider } from './Slider';

export default {
  title: 'components/Slider',
  component: Slider,
};

const Template = (args) => <Slider {...args} />;

export const Default = Template.bind({});
Default.args = {};
