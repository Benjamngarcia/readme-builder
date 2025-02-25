import { useState, useEffect } from "react";
import { Technology } from "../../../types";
import { useEditorContext } from "../../../context/EditorContext";

interface TechnologiesListProps {
  filteredTechnologies: Technology[];
}

const initialStateTech = [
  { label: "JavaScript", value: "js", icon: "js" },
  { label: "HTML", value: "html", icon: "html" },
  { label: "CSS", value: "css", icon: "css" },
  { label: "WASM", value: "wasm", icon: "wasm" },
];

const TechnologiesList: React.FC<TechnologiesListProps> = ({
  filteredTechnologies,
}) => {
  const { setSkilliconsLink } = useEditorContext();
  const [selectedTechnologiesState, setSelectedTechnologiesState] = useState<Technology[]>(initialStateTech);

  const handleTechnologySelection = (tech: Technology) => {
    if (selectedTechnologiesState.some(t => t.value === tech.value)) {
      setSelectedTechnologiesState((prev) => 
        prev.filter((item) => item.value !== tech.value)
      );
    } else {
      setSelectedTechnologiesState((prev) => 
        [...prev, tech]
      );
    }
  };

  const generateSkilliconsLink = () => {
    return `https://skillicons.dev/icons?i=${selectedTechnologiesState
      .map((tech) => tech.value)
      .join(",")}`;
  };

  useEffect(() => {
    if (selectedTechnologiesState.length > 0) {
      const link = generateSkilliconsLink();
      setSkilliconsLink(link);
    }
  }, [selectedTechnologiesState, setSkilliconsLink]);

  return (
    <div className="space-y-4 min-h-[60vh]">
      <div className="space-y-2">
        <div className="relative">
          <div className="w-full bg-gray-800 rounded-lg mt-2 p-4 overflow-y-auto max-h-96 space-y-3">
            {filteredTechnologies.map((tech) => (
              <div key={tech.value} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={selectedTechnologiesState.some(t => t.value === tech.value)}
                  onChange={() => handleTechnologySelection(tech)}
                  className="w-4 h-4"
                />
                <img
                  src={`https://skillicons.dev/icons?i=${tech.icon}`}
                  alt={tech.label}
                  className="w-5 h-5"
                  loading="lazy"
                />
                <span>{tech.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 text-sm text-gray-400">
        These icons are provided by{" "}
        <a
          href="https://skillicons.dev/"
          target="_blank"
          className="text-blue-500"
        >
          Skill Icons
        </a>
      </div>
    </div>
  );
};

export default TechnologiesList;
