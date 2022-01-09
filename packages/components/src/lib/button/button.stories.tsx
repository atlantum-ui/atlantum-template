import { Story, Meta } from '@storybook/react';
import { Button } from '../../../../../dist/packages/components';

export default {
    component: Button,
    title: 'Button',
} as Meta;

const Template: Story = (args) => <Button {...args}>I'm a Button</Button>;

export const SecondaryButton = Template.bind({});
SecondaryButton.args = {};
