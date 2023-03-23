import React from 'react';
import { SocialButton } from './SocialButton';
import { SOCIAL_ICON_TYPES } from '../SocialIcons';

export default {
  title: 'components/SocialButton',
  component: SocialButton,
  argTypes: {
    icon: {
      options: Object.values(SOCIAL_ICON_TYPES),
      control: { type: 'select' },
    },
  },
};

const Template = (args) => <SocialButton {...args} />;

export const Button = Template.bind({});
Button.args = {
  icon: SOCIAL_ICON_TYPES.facebook,
};
