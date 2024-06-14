import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Button from '../../../components/button/button.tsx';

import './button.css';

const meta = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CustomClass: Story = {
  args: {
    children: 'Custom Class Button',
    className: 'custom-class',
  }
};

export const WithAriaLabel: Story = {
  args: {
    children: 'Button with Aria Label',
    ariaLabel: 'button-label',
  },
};

export const Disabled: Story = {
    args: {
        children: 'Disabled button',
        disabled: true,
    },
};