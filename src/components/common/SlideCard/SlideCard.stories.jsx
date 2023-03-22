import { SlideCard } from './SlideCard';

export default {
  title: 'components/SlideCard',
  component: SlideCard,
};

const Template = (args) => <SlideCard {...args} />;

export const Default = Template.bind({});
Default.args = {};
