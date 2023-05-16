export const hasUniquePropertyValues = (arr: any[], property: string): boolean => {
  return arr.length === new Set(arr.map(obj => obj[property])).size;
}