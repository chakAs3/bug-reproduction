import { ColumnSettings } from "@/components/TPDataGrid/types/ColumnSettings";
import { TPDataGrid } from "../components/TPDataGrid";
import type { Meta, StoryObj } from "@storybook/vue3";

const meta: Meta<typeof TPDataGrid> = {
  title: 'Components/TPDataGrid',
  component: TPDataGrid,
  argTypes: {
  }
};

export default meta;

type Story = StoryObj<typeof TPDataGrid>;

const columns: ColumnSettings[] = [
  {
    title: 'Column 1',
    width: 200,
    hidden: false,
    sortable: false,
    filterable: false
  }
];

export const Basic: Story = {
  argTypes: meta.argTypes,
  args: {
    columns: columns
  },
  render: (args) => {
    return {
      components: { TPDataGrid },
      template: `
        <TPDataGrid :columns="columns" />
      `,
      props: args,
    };
  },
};