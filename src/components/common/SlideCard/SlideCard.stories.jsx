import { SlideCard } from "./SlideCard";
import photo_1 from "../Slider/SliderImg/photo_1.svg";

export default {
  title: "components/SlideCard",
  component: SlideCard,
};

const Template = (args) => <SlideCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "The best ones!",
  name: "Cory Delmeir",
  desc: "I was using a couple of services, but only HireArt really helped… They have great features like intuitive UI, ease of use /UX and great customer service agents like Anna, who helped through the process. I will recommend it to my friends.  Give this service a chance!",
  img: photo_1,
  pos: "Frontend developer",
};
