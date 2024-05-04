import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Message } from '../../../components/simple/Message';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Simple Components/Message',
  component: Message,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    style: { 
      control: 'select', 
      options: ['success', 'attention', 'danger'],
      description: 'style of message',
    },
    children: {
      control: 'text',
    }
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Message>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
    args: {
        children: 'Default message',
    }
};

export const Success: Story = {
  args: {
    style: 'success',
    children: 'Message of success',
  },
};

export const Attention: Story = {
    args: {
      style: 'attention',
      children: 'Message of attention',
    },
  };

  export const Danger: Story = {
    args: {
      style: 'danger',
      children: 'Message of danger',
    },
  };
