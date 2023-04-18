import React from 'react';
import { Meta } from '@storybook/react';
import Icon from './Icon';

export default {
    title: 'Icon-component',
    component: Icon,
} as Meta;

const Template = (args: any) => <Icon {...args} />;

export const Small = Template.bind({});
Small.args = {
    size: 'small',
};

export const Medium = Template.bind({});
Medium.args = {
    size: 'medium',
};

export const Large = Template.bind({});
Large.args = {
    size: 'large',
};