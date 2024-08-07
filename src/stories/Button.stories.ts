import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from './Button';

const meta = {
  title: 'Stories/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas.
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry.
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Rounded_Top: Story = {
  args: {
    rounded: 'top',
    label: 'Button',
  },
};

export const Rounded_10: Story = {
  args: {
    rounded: 'rounded10',
    label: 'Button',
  },
};

export const Rounded_50: Story = {
  args: {
    rounded: 'rounded50',
    label: 'Button',
  },
};

export const Rounded_pill: Story = {
  args: {
    rounded: 'pill',
    label: 'Button',
  },
};

export const Size_Small: Story = {
  args: {
    size: 'sm',
    label: 'Button',
  },
};

export const Size_Large: Story = {
  args: {
    size: 'lg',
    label: 'Button',
  },
};

export const Shadow_Small: Story = {
  args: {
    shadow: 'small',
    label: 'Button',
  },
};

export const Shadow_Medium: Story = {
  args: {
    shadow: 'medium',
    label: 'Button',
  },
};

export const Shadow_Large: Story = {
  args: {
    shadow: 'large',
    label: 'Button',
  },
};