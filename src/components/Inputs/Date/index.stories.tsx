import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { InputDate } from "./index"

const meta: Meta<typeof InputDate> = {
    title: "Components/Inputs/Date-button",
    component: InputDate,
    argTypes: {
      placeholder: { control: "text" },
    },
};

export default meta;
type Story = StoryObj<typeof InputDate>;

export const Input_Date: Story = {
    render: (args) => <InputDate {...args} />,
    args: {
      placeholder: "jj/mm/aaaa",
      srcIcon: "",
    },
  };