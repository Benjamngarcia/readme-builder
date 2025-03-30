"use client";

import { FC, useState } from "react";
import { Section } from "../../../types";
import { sectionsListArr } from "../../../utils/sectionsList";
import DraggableSection from "../../ui/DraggableSection";
import DraggableTemplate from "../../ui/DraggableTemplate";
import TextInput from "../../ui/TextInput";
import Modal from "../../ui/Modal";
import Button from "../../../components/ui/Button";
import { useEditorContext } from "../../../context/EditorContext";
import { availableTechnologies } from "../../../utils/availableTechnologies";
import { IconArrowLeft } from "@tabler/icons-react";
import TechnologiesList from "../../../components/ui/TechnologiesList";
import GithubStats from "../../../components/ui/GithubStats";
import { templatesList } from "../../../utils/templateList";

const SectionList: FC = () => {
  const { selectedSectionId, setSelectedSectionId } = useEditorContext();
  const [viewMode, setViewMode] = useState<"sections" | "templates">(
    "sections"
  );
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [sections, setSections] = useState<Section[]>(sectionsListArr);
  const [newSectionName, setNewSectionName] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedSection, setSelectedSection] = useState<string | null>(null);

  const filteredSections = sections.filter((section) =>
    section.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredTemplates = templatesList.filter((template) =>
    template.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelect = (id: string) => {
    setSelectedSection(selectedSection === id ? null : id);
  };

  const handleAddSection = () => {
    const newSection: Section = {
      id: (sections.length + 1).toString(),
      title: newSectionName,
    };
    setSections([...sections, newSection]);
    setIsModalOpen(false);
  };

  const renderEditSections = () => {
    switch (selectedSectionId) {
      case "13":
        return (
          <TechnologiesList
            filteredTechnologies={availableTechnologies.filter((tech) =>
              tech.label.toLowerCase().includes(searchTerm.toLowerCase())
            )}
          />
        );
      case "21":
        return <GithubStats />;
      case "23":
        return <GithubStats />;
      default:
        return (
          <div className="overflow-y-auto max-h-[60vh] space-y-2 pr-4">
            {viewMode === "sections" &&
              filteredSections.map((section) => (
                <DraggableSection
                  key={section.id}
                  section={section}
                  isSelected={selectedSection === section.id}
                  onSelect={() => handleSelect(section.id)}
                />
              ))}
            {viewMode === "templates" &&
              filteredTemplates.map((template) => (
                <DraggableTemplate key={template.id} template={template} />
              ))}
            {viewMode === "sections" && (
              <Button
                onClick={() => setIsModalOpen(true)}
                variant="colored"
                color="blue"
              >
                + Custom Section
              </Button>
            )}
          </div>
        );
    }
  };

  const handleBackToEditor = () => {
    setSelectedSectionId(null);
    setSelectedSection(null);
    setSearchTerm("");
  };

  return (
    <div className="w-[90%] max-h-[80vh] p-4 bg-background text-white border border-gray-700 rounded-lg space-y-4 overflow-hidden">
      {selectedSectionId === "13" ||
      selectedSectionId === "21" ||
      selectedSectionId === "23" ? (
        <Button
          onClick={() => handleBackToEditor()}
          variant="outlined"
          color="gray"
          icon={<IconArrowLeft />}
        >
          Back to Editor
        </Button>
      ) : null}

      <div className="relative inline-flex items-center mb-4">
        <div className="absolute inset-0 flex">
          <div
            className={`w-1/2 transition-transform duration-300 ease-in-out transform rounded-full
        ${
          viewMode === "sections"
            ? "translate-x-0 bg-blue-500"
            : "translate-x-full bg-blue-500"
        }`}
          />
        </div>

        <button
          onClick={() => setViewMode("sections")}
          className={`relative z-10 px-4 py-2 w-1/2 text-center transition-colors duration-300 ease-in-out rounded-l-full
      focus:outline-none focus:ring-0
      ${viewMode === "sections" ? "text-white" : "text-blue-500"}`}
        >
          Sections
        </button>

        {/* Botón: Templates */}
        <button
          onClick={() => setViewMode("templates")}
          className={`relative z-10 px-4 py-2 w-1/2 text-center transition-colors duration-300 ease-in-out rounded-r-full
      focus:outline-none focus:ring-0
      ${viewMode === "templates" ? "text-white" : "text-blue-500"}`}
        >
          Templates
        </button>
      </div>

      <div className="font-bold text-xl mb-4">
        {selectedSectionId === "13"
          ? "Technologies"
          : selectedSectionId === "21" || selectedSectionId === "23"
          ? "Custom your widget"
          : viewMode === "sections"
          ? "Sections"
          : "Templates"}
      </div>
      <p className="text-sm text-gray-400">
        {selectedSectionId === "13"
          ? "Select the technologies that you wish to display."
          : selectedSectionId === "21" || selectedSectionId === "23"
          ? "Complete the info to your widget"
          : "Drag and drop items to arrange your content."}
      </p>
      {(selectedSectionId === "13" || selectedSectionId === null) && (
        <div className="my-4">
          <TextInput
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={
              selectedSectionId === "13"
                ? "Search Technologies..."
                : viewMode === "sections"
                ? "Search Sections..."
                : "Search Templates..."
            }
          />
        </div>
      )}

      {renderEditSections()}
      {viewMode === "sections" && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Add New Section"
        >
          <TextInput
            value={newSectionName}
            onChange={(e) => setNewSectionName(e.target.value)}
            placeholder="Enter section name"
            id="newSectionName"
          />
          <div className="flex justify-between">
            <Button
              onClick={() => setIsModalOpen(false)}
              variant="outlined"
              color="gray"
            >
              Cancel
            </Button>
            <Button onClick={handleAddSection} variant="colored" color="blue">
              Save
            </Button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default SectionList;
