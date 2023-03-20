import React from 'react';
import { Button } from './Button';

export default {
  title: 'Application/components/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary',
};

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
  children: 'Primary',
  isDisabled: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Secondary',
  variant: 'secondary',
};

export const SecondaryDisabled = Template.bind({});
SecondaryDisabled.args = {
  children: 'Secondary',
  variant: 'secondary',
  isDisabled: true,
};

export const Subtle = Template.bind({});
Subtle.args = {
  children: 'Subtle',
  variant: 'subtle',
};

export const PrimaryBig = Template.bind({});
PrimaryBig.args = {
  children: 'Primary',
  size: 'big',
};

export const SecondaryBig = Template.bind({});
SecondaryBig.args = {
  children: 'Secondary',
  variant: 'secondary',
  size: 'big',
};
