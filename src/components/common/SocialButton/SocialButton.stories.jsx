import React from 'react';
import { SocialButton } from './SocialButton';
import { SOCIAL_ICON_TYPES, SociaIcons } from '../SocialIcons';

export default {
  title: 'components/SocialButton',
  component: SocialButton,
  argTypes: {
    name: {
      options: Object.values(SOCIAL_ICON_TYPES),
      control: { type: 'select' },
    },
    fill: {
      control: { type: 'color' },
      defaultValue: 'black'
    },
  },
};

const Template = (args) => <SocialButton {...args} />;

export const SocialIcon = Template.bind({});
SocialIcon.args = {
  name: SOCIAL_ICON_TYPES.insta,
};

export const Multiple = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {Object.values(SOCIAL_ICON_TYPES).map((icon) => (
        <div key={icon} style={{ margin: '8px' }}>
          <SociaIcons size={28} name={icon} />
        </div>
      ))}
    </div>
  );
};
