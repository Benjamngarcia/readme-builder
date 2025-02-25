"use client";

import { FC, useState } from "react";
import { Section } from "../../../types";
import { sectionsListArr } from "../../../utils/sectionsList";
import DraggableSection from "../../ui/DraggableSection";
import TextInput from "../../ui/TextInput";
import Modal from "../../ui/Modal";
import Button from "../../../components/ui/Button";
import { useEditorContext } from "../../../context/EditorContext";
import { availableTechnologies } from "../../../utils/availableTechnologies";
import { IconArrowLeft } from "@tabler/icons-react";
import TechnologiesList from "@/components/ui/TechnologiesList";

const SectionList: FC = () => {
  const { selectedSectionId, setSelectedSectionId } = useEditorContext();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [sections, setSections] = useState<Section[]>(sectionsListArr);
  const [newSectionName, setNewSectionName] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedSection, setSelectedSection] = useState<string | null>(null);

  const filteredSections = sections.filter((section) =>
    section.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredTechnologies = availableTechnologies.filter((tech) =>
    tech.label.toLowerCase().includes(searchTerm.toLowerCase())
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

  return (
    <div className="w-[90%] max-h-[80vh] p-4 bg-background text-white border border-gray-700 rounded-lg space-y-4 overflow-hidden">
      {selectedSectionId === "section-13" && (
        <Button
          onClick={() => setSelectedSectionId(null)}
          variant="outlined"
          color="gray"
          icon={<IconArrowLeft />}
        >
          Back to Editor
        </Button>
      )}
      <div className="font-bold text-xl mb-4">
        {selectedSectionId === "section-13" ? "Technologies" : "Sections"}
      </div>
      <p className="text-sm text-gray-400">
        {selectedSectionId === "section-13"
          ? "Select the technologies that you wish display."
          : "Drag and drop sections to rearrange them."}
      </p>
      <div className="my-4">
        <TextInput
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder={
            selectedSectionId === "section-13"
              ? "Search Technologies..."
              : "Search Sections..."
          }
        />
      </div>

      {selectedSectionId === "section-13" ? (
        <TechnologiesList filteredTechnologies={filteredTechnologies} />
      ) : (
        <div className="overflow-y-auto max-h-[60vh] space-y-2 pr-4">
          {filteredSections.map((section) => (
            <DraggableSection
              key={section.id}
              section={section}
              isSelected={selectedSection === section.id}
              onSelect={() => handleSelect(section.id)}
            />
          ))}
          <Button
            onClick={() => setIsModalOpen(true)}
            variant="colored"
            color="blue"
          >
            + Custom Section
          </Button>
        </div>
      )}
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
    </div>
  );
};

export default SectionList;
