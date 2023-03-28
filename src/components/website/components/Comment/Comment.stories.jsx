import { Comment } from "./Comment";

export default {
  title: "Website/components/Comment",
  component: Comment,
};

const Template = (args) => <Comment {...args} />;

export const Default = Template.bind({});
Default.args = {};