import { CustomersSay } from "./CustomersSay";

export default {
  title: "website/components/CustomersSay",
  component: CustomersSay,
};

const Template = (args) => <CustomersSay {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "What Our Customers Say",
};
