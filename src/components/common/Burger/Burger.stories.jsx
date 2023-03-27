import { Burger } from './Burger';
import React from 'react';

export default {
    title: 'components/Button/Burger',
    component: Burger,
};

const Template = (args) => <Burger {...args} />;


export const Default = Template.bind({});
Default.args = {
    onClick: () => { },
    isOpen: false,
};