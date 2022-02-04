export type DialoguerDataType = { script: string; speed: number } | number;

export interface DialoguerOptionType {
  data: DialoguerDataType[];
  callback: Function;
}
