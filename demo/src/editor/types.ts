export interface EditProps<T> {
  value: T;
  onChangeValue: (newValue: T) => void;
}

export interface OptionalEditProps<T> extends EditProps<T> {
  checked: boolean;
  onChangeChecked: (checked: boolean) => void;
  id: string;
}
