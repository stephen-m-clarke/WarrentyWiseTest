import type { Meta, StoryObj } from '@storybook/react-vite';
import { LibraryProvider } from './LibraryProvider';

const meta = {
  title: 'Components/LibraryProvider',
  component: LibraryProvider,
} satisfies Meta<typeof LibraryProvider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <div>Your app content wrapped in MantineProvider</div>,
  },
};
