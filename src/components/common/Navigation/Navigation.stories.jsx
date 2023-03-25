import { Navigation } from './Navigation';

export default {
  title: 'components/Navigation',
  component: Navigation,
  parameters: {
    viewport: {
      defaultViewport: 'Mobile',
      viewports: {
        Mobile: {
          name: 'Mobile',
          styles: {
            width: '357px',
            height: '70vh',
          },
        },
        Desktop: {
          name: 'Desktop',
          styles: {
            width: '769px',
            height: '80vh',
          },
        },
      },
    },
  },
};

const Template = (args) => <Navigation {...args} />;

export const ClickOnLoginBtn = Template.bind({});
ClickOnLoginBtn.args = {
};



// import { Navigation } from "./Navigation";

// export default {
//   title: "components/Navigation",
//   component: Navigation,
//   argTypes: {
//     mobile: {
//       control: {
//         type: "boolean",
//       },
//     },
//   },
// };

// const Template = (args) => <Navigation {...args} />;

// export const Default = Template.bind({});
// Default.args = {
// };





