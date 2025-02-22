export interface Section {
  id: string;
  title: string;
}

export interface EditorProps {
  value: string;
  onChange: (value: string) => void;
}
