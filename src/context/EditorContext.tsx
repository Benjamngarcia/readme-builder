import React, { createContext, useState, useContext, ReactNode } from "react";

interface EditorContextProps {
  selectedSectionId: string | null;
  setSelectedSectionId: (id: string | null) => void;
  skilliconsLink: string;
  setSkilliconsLink: (link: string) => void;
}

interface EditorProviderProps {
  children: ReactNode;
}

const EditorContext = createContext<EditorContextProps | undefined>(undefined);

export const EditorProvider: React.FC<EditorProviderProps> = ({ children }) => {
  const [selectedSectionId, setSelectedSectionId] = useState<string | null>(null);
  const [skilliconsLink, setSkilliconsLink] = useState<string>('');

  return (
    <EditorContext.Provider
      value={{
        selectedSectionId,
        setSelectedSectionId,
        skilliconsLink,
        setSkilliconsLink,
      }}
    >
      {children}
    </EditorContext.Provider>
  );
};

export const useEditorContext = (): EditorContextProps => {
  const context = useContext(EditorContext);
  if (!context) {
    throw new Error("useEditorContext must be used within an EditorProvider");
  }
  return context;
};
