import type { Meta, StoryObj } from '@storybook/react';
import Input from '../components/input/input.tsx';

const meta = {
    title: 'Input',
    component: Input,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultInput: Story = {
    args: {
        id: '1',
        disabled: true,
        placeholder: 'Placeholder',
        value: 'Value',
        onChange: () => {}
    }
};

export const DisabledInput: Story = {
    args: {
        id: '2',
        disabled: false,
        placeholder: 'Placeholder',
        value: 'Value',
        onChange: () => {}
    },
};