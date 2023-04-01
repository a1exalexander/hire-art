import { Navigation } from './Navigation';

export default {
  title: 'components/Navigation',
  component: Navigation,
};

function Template(args) {
  return <Navigation {...args} />;
}

export const ClickOnLoginBtn = Template.bind({});
ClickOnLoginBtn.args = {
  name: 'name',
  email: 'email@email.email',
};
