import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Image from 'next/image';
import { CustomInput } from '../../../components/composite/CustomInput';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Composite Components/CustomInput',
  component: CustomInput,
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
      description: 'style of input',
    },
    children: {
        table: {
            disable: true
        }
    }
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { 
    onClick: fn(),
    children: (
        <>
            <CustomInput.Visual>
                <Image src="/next.svg" alt="..." width={32} height={32}/>
            </CustomInput.Visual>
            <CustomInput.Field id="input" placeholder="Digite algo..." />
        </>
    )
  },
} satisfies Meta<typeof CustomInput>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {};

export const Primary: Story = {
  args: {
    style: 'primary',
  },
};

export const Secondary: Story = {
    args: {
      style: 'secondary',
    },
};
