import React from 'react';
import { SocialButton } from './SocialButton';
import { SOCIAL_ICON_TYPES, SociaIcons } from '../SocialIcons';

export default {
  title: 'components/Button/Socialbutton',
  component: SocialButton,
  argTypes: {
    name: {
      options: Object.values(SOCIAL_ICON_TYPES),
      control: { type: 'select' },
    },
    color: {
      control: { type: 'color' },
      defaultValue: 'black'
    },
    size: {
      control: { type: 'range', min: 10, max: 100 },
    },
  },
};

const Template = (args) => <SocialButton {...args} />;

const TemplateDark = (args) => (
  <div style={{ backgroundColor: '#07063D', padding: '32px' }}>
    <SocialButton {...args} />
  </div>
);
export const Single = TemplateDark.bind({});
Single.args = {
  name: SOCIAL_ICON_TYPES.insta,
};

export const Multiple = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {Object.values(SOCIAL_ICON_TYPES).map((icon) => (
        <div key={icon} style={{ margin: '8px' }}>
          <SociaIcons size={32} name={icon} />
        </div>
      ))}
    </div>
  );
};
