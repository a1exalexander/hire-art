import { Comment } from './Comment';

export default {
  title: 'Website/components/Comment',
  component: Comment,
};

function Template(args) {
  return <Comment {...args} />;
}

export const Default = Template.bind({});
Default.args = {};
