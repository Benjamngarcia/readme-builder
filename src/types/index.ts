export interface Section {
  id: string;
  title: string;
}

export interface EditorProps {
  value: string;
  onChange: (value: string) => void;
}

export interface Technology {
  value: string;
  label: string;
  icon: string;
}
