import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Textarea } from '../../../components/simple/Textarea';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Simple Components/Textarea',
  component: Textarea,
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
      options: ['primary', 'secondary'],
      description: 'style of textarea',
    },
    placeholder: {
      control: 'text',
    },
    rows: {
      control: 'number',
      description: 'number of rows like a tag textarea',
      defaultValue: 3
    },
    cols: {
      control: 'number',
      description: 'number of columns like a tag textarea',
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    placeholder: 'placeholder of input',
  }
};

export const Primary: Story = {
  args: {
    style: 'primary',
    placeholder: 'placeholder of input',
  },
};

export const Secondary: Story = {
    args: {
      style: 'secondary',
      placeholder: 'placeholder of input',
    },
};
