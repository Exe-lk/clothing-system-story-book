import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { SearchBar } from './SearchBar';

const meta = {
  title: 'Stories/SearchBar',
  component: SearchBar,
  parameters: {
    // Optional parameter to center the component in the Canvas.
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry.
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
  },
} satisfies Meta<typeof SearchBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Rounded_10: Story = {
  args: {
    rounded: 'rounded10',
    label: 'searchBar',
    placeholder: 'search..'
  },
};

export const Rounded_50: Story = {
  args: {
    rounded: 'rounded50',
    label: 'searchBar',
    placeholder: 'search..'
  },
};

export const Rounded_pill: Story = {
  args: {
    rounded: 'pill',
    label: 'searchBar',
    placeholder: 'search..'
  },
};

export const padding_0: Story = {
  args: {
    padding: 0,
    label: 'searchBar',
    placeholder: 'search..'
  },
};

export const padding_2: Story = {
  args: {
    padding: 2,
    label: 'searchBar',
    placeholder: 'search..'
  },
};

export const padding_3: Story = {
  args: {
    padding: 3,
    label: 'searchBar',
    placeholder: 'search..'
  },
};