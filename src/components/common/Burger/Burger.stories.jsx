import { Burger } from './Burger';

export default {
    title: 'components/Burger',
    component: Burger,
};

const Template = (args) => <Burger {...args} />;

export const Default = Template.bind({});
Default.args = {};