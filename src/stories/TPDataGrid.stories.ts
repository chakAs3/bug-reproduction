import { ColumnSettings } from "@/components/TPDataGrid/types/ColumnSettings";
import { TPDataGrid } from "../components/TPDataGrid";
import type { Meta, StoryObj } from "@storybook/vue3";

const meta: Meta<typeof TPDataGrid> = {
  title: 'Components/TPDataGrid',
  component: TPDataGrid,

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
 
  args: {
    columns: columns
  },
  render: (args: any) => {
    return {
      components: { TPDataGrid },
      template: `
        <TPDataGrid :columns="columns" />
      `,
      props: ['columns'],
    };
  },
};

export const BasicWithSetup: Story = {
 
  args: {
    columns: columns
  },
  render: (args: any) => {
    return {
      components: { TPDataGrid },
      setup(){
        return { columns : args.columns}
      },
      template: `
        <TPDataGrid :columns="columns" />
      `,
    };
  },
};