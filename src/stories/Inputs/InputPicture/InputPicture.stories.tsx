import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import {InputPicture} from './InputPicture';

const meta: Meta<typeof InputPicture> = {
    title: "Components/Inputs/Picture",
    component: InputPicture,
    argTypes: {
      label: { control: "text" },
    },
};

export default meta;
type Story = StoryObj<typeof InputPicture>;

export const picture: Story = {
    render: (args) => <InputPicture {...args} />,
    args: {
      label: "label",
    },
  };