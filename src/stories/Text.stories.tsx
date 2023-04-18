import { Meta } from '@storybook/react';
import Text from './Text';

export default {
    title: 'Text-component',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
      },
} as Meta;

const Template = (args: any) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
    title: 'Titre du component',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel dui ac odio malesuada semper. Vivamus tincidunt elit velit, eget placerat quam ornare et. Proin maximus neque vel neque elementum, et elementum quam sagittis. Mauris ultricies magna nec diam vulputate lacinia. Proin aliquam velit id diam molestie interdum. Nam vel tellus viverra, mattis erat vitae, fringilla magna. Fusce in ligula eu lectus rutrum porta ac sed augue. Pellentesque in ex odio. Ut lobortis, massa vel lacinia bibendum, leo mi luctus diam, id mollis orci elit a felis. Sed pretium facilisis tortor, eu pulvinar justo euismod vitae. Duis dapibus lorem sit amet turpis dapibus, non accumsan ligula maximus. In sagittis massa lacus, et consequat nunc mattis vitae. Phasellus ac mauris nec leo luctus egestas. Etiam tristique orci nec mi posuere, non aliquet elit congue. Proin auctor justo elit, vitae interdum diam pretium vel.',
    divWidth: '312px',
};
