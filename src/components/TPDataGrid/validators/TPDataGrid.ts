import { hasUniquePropertyValues } from "../helpers/array";
import { ColumnSettings } from "../types/ColumnSettings";

export const TPDataGridValidator = (columns: ColumnSettings[]) => {
  const hasUniqueTitles = hasUniquePropertyValues(columns, 'title');

  if (!hasUniqueTitles) {
    throw new Error('Each column must have the unique title. Please check columns for a duplicate')
  }

  return true;
}