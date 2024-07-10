import type { Meta, StoryObj } from '@storybook/react';
import Counter from '../../../components/counter/counter.tsx';

import styles from './counter.module.css';

const meta = {
    title: 'Molecules/Counter',
    component: Counter,
    parameters: {
    layout: 'centered',
},
tags: ['autodocs'],
} satisfies Meta<typeof Counter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultCounter: Story = {
    args: {
        id: 1,
        size: 'default',
        quantity: 1,
    }
};

export const BigCounter: Story = {
    args: {
        id: 2,
        size: 'big',
        quantity: 1,
    }
};

export const CustomClassName: Story = {
    args: {
        id: 3,
        size: 'default',
        quantity: 1,
        className: styles.customClass,
    }
};