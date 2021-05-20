export interface EditProps<T> {
  value: T;
  onChangeValue: (newValue: T) => void;
  id: string;
}

export interface OptionalEditProps<T> extends EditProps<T> {
  checked: boolean;
  onChangeChecked: (checked: boolean) => void;
}
