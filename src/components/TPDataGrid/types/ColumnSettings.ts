import { ComponentOptions } from "vue";

export interface ColumnSettings {
  title: string;
  width: number;
  component?: ComponentOptions;
  hidden: boolean;
  sortable: boolean;
  filterable: boolean;
}