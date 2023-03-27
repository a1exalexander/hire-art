import { Accardion } from './Accardion';

export default {
  title: 'components/Accardion',
  component: Accardion,
};

const Template = (args) => <Accardion {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Why Hire Art?',
  content: 'Lorem ipsum dolor sit amet consectetur. Non nisl at aenean suspendisse sapien volutpat amet suspendisse. Purus mollis vehicula maecenas urna.',
};
