import type { Meta, StoryObj } from '@storybook/react';
import {withRouter} from 'storybook-addon-remix-react-router';
import {Provider} from 'react-redux';
import Navigation from '@components/navigation/navigation.tsx';
import {store} from '@app/store/store.ts';

const meta = {
    title: 'Molecules/Navigation',
    render: (args) => <Navigation type={args.type}/>,
    decorators: [withRouter, Story => (
        <Provider store={store}>
            <Story />
        </Provider>
    )],
    parameters: {
        layout: 'centered',
        backgrounds: {
            default: 'purple'
        }
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Navigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NavigationHeader: Story = {
    args: {
        type: 'header'
    }
};

export const NavigationFooter: Story = {
    args: {
        type: 'footer'
    }
};