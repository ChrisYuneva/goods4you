import type {Preview} from '@storybook/react';
import '../src/app/styles/index.scss';

const preview: Preview = {
    parameters: {
        backgrounds: {
            values: [
                {name: 'purple', value: '#484283'},
            ],
        },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
};

export default preview;
