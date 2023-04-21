import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Button> = {
  title: 'Design System/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // Assigns the argTypes to the Colors category
    backgroundColor: {
      control: 'color',
      table: {
        category: 'Colors',
        // Assigns the argTypes to a specific subcategory
        subcategory: 'Button colors',
      },
    },
    primary: {
      table: {
        category: 'Colors',
        subcategory: 'Button style',
      },
    },
    label: {
      table: {
        category: 'Text',
        subcategory: 'Button contents',
      },
    },
    // Assigns the argType to the Events category
    onClick: {
      table: {
        category: 'Events',
        subcategory: 'Button Events',
      },
    },
    // Assigns the argType to the Sizes category
    size: {
      table: {
        category: 'Sizes',
      },
    },
  },
};


// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export default meta;
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  render: () => <Button primary label="Button" />,
};

export const Secondary: Story = {
  render: () => <Button label="Button" />,
};

export const Large: Story = {
  render: () => <Button size='large' label="Button" />,
};

export const Small: Story = {
  render: () => <Button size='small' label="Button" />,
};
