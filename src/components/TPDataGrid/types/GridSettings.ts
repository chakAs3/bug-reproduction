import { SortDirection } from "./SortDirection"

export interface GridSettings {
  sortBy?: string,
  sortDirection?: SortDirection,
  stickyColumn?: string,
  resizable?: boolean,
}