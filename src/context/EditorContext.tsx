import React, { createContext, useState, useContext, ReactNode } from "react";

interface EditorContextProps {
  selectedSectionId: string | null;
  setSelectedSectionId: (id: string | null) => void;
  skilliconsLink: string;
  setSkilliconsLink: (link: string) => void;
  statsWidgetDetails: { profile: string; theme: string; hideBorder: boolean };
  setStatsWidgetDetails: (details: { profile: string; theme: string; hideBorder: boolean }) => void;
}

interface EditorProviderProps {
  children: ReactNode;
}

const EditorContext = createContext<EditorContextProps | undefined>(undefined);

export const EditorProvider: React.FC<EditorProviderProps> = ({ children }) => {
  const [selectedSectionId, setSelectedSectionId] = useState<string | null>(null);
  const [skilliconsLink, setSkilliconsLink] = useState<string>('');
  const [statsWidgetDetails, setStatsWidgetDetails] = useState({ profile: '', theme: '', hideBorder: false });

  return (
    <EditorContext.Provider
      value={{
        selectedSectionId,
        setSelectedSectionId,
        skilliconsLink,
        setSkilliconsLink,
        statsWidgetDetails,
        setStatsWidgetDetails,
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
