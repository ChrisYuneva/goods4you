import type { Meta, StoryObj } from '@storybook/react';
import styles from './counter.module.css';
import Counter from '@components/counter/counter.tsx';
import {Provider} from 'react-redux';
import {store} from '@app/store/store.ts';

const meta = {
    title: 'Molecules/Counter',
    component: Counter,
    decorators: [
        Story => (
            <Provider store={store}>
                <Story />
            </Provider>
        )
    ],
    parameters: {
    layout: 'centered',
},
tags: ['autodocs'],
} satisfies Meta<typeof Counter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultCounter: Story = {
    args: {
        product: {
            id: 1,
            title: 'Title 1',
            price: 100,
            quantity: 4,
            total: 35,
            discountPercentage: 7,
            discountedTotal: 80,
            thumbnail: ''
        },
        size: 'default',
        quantity: 1,
        stock: 3,
    }
};

export const BigCounter: Story = {
    args: {
        product: {
            id: 2,
            title: 'Title 2',
            price: 200,
            quantity: 3,
            total: 35,
            discountPercentage: 7,
            discountedTotal: 80,
            thumbnail: ''
        },
        size: 'big',
        quantity: 1,
        stock: 50,
    }
};

export const CustomClassName: Story = {
    args: {
        product: {
            id: 3,
            title: 'Title 3',
            price: 300,
            quantity: 7,
            total: 35,
            discountPercentage: 7,
            discountedTotal: 80,
            thumbnail: ''
        },
        size: 'default',
        quantity: 1,
        stock: 58,
        className: styles.customClass,
    }
};