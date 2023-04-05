import { UserDropDawn } from './UserDropDawn';

export default {
    title: 'components/Navigation',
    component: UserDropDawn,
};

function Template(args) {
    return <UserDropDawn {...args} />
}

export const DropDawn = Template.bind({});
DropDawn.args = {
};


