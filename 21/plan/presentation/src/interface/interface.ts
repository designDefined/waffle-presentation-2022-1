export type DialoguerDataType = { script: string; speed: number } | number;

export interface DialoguerOptionType {
  index: number;
  data: DialoguerDataType[];
  callback: Function;
  invisible?: boolean;
}

export interface PathDataType {
  index: number;
  label: string;
  callback: Function;
  style?: string;
}
