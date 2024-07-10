import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Button from '../../../components/button/button.tsx';

import styles from './button.module.css';

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

export const Default: Story = {
    args: {
        children: 'Default Button',
    }
};

export const CustomClass: Story = {
  args: {
    children: 'Custom Class Button',
    className: styles.customClass,
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