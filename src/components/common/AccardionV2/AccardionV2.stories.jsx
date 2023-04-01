import { AccardionV2 } from './AccardionV2';

export default {
  title: 'components/AccardionV2',
  component: AccardionV2,
};

function Template(args) {
  return <div style={{ backgroundColor: '#F3F5F8', padding: '32px' }}>
    <AccardionV2 {...args} />
  </div>
}

export const Default = Template.bind({});
Default.args = {};
