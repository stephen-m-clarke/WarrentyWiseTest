import type { Meta, StoryObj } from '@storybook/react-vite';
import { SimpleGrid } from './SimpleGrid';

const meta = {
  title: 'Components/SimpleGrid',
  component: SimpleGrid,
} satisfies Meta<typeof SimpleGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ThreeColumns: Story = {
  args: {
    cols: 3,
    spacing: 'md',
    children: <><div>Item 1</div><div>Item 2</div><div>Item 3</div></>,
  },
};
