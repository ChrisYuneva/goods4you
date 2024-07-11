import type { Meta, StoryObj } from '@storybook/react';;
import {Provider} from 'react-redux';
import SearchForm from '@components/searchForm/searchForm.tsx';
import {store} from '@app/store/store.ts';

const meta = {
    title: 'Molecules/SearchForm',
    component: SearchForm,
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
} satisfies Meta<typeof SearchForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultSearchForm: Story = {
    args: {
        loading: false
    }
};

export const DisabledSearchForm: Story = {
    args: {
        loading: true
    }
};