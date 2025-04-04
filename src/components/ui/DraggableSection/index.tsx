"use client";

import { FC, forwardRef } from "react";
import { useDrag } from "react-dnd";
import { Section } from "../../../types";
import { IconGripVertical } from "@tabler/icons-react";

interface DraggableSectionProps {
  section: Section;
  isSelected: boolean;
  onSelect: () => void;
}

const DraggableSection: FC<DraggableSectionProps> = forwardRef<
  HTMLDivElement,
  DraggableSectionProps
>(({ section, isSelected, onSelect }, ref) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "section",
    item: section,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const dragRef = (node: HTMLDivElement | null) => {
    drag(node);
    if (ref && typeof ref === "function") {
      ref(node);
    } else if (ref && "current" in ref) {
      if (node) {
        (ref as React.RefObject<HTMLDivElement>).current = node;
      }
    }
  };

  DraggableSection.displayName = "DraggableSection";
  return (
    <div
      ref={dragRef}
      className={`flex items-center justify-between p-3 border rounded-md my-1 transition-colors duration-300 ${
        isDragging || isSelected ? "border-blue-500" : "border-gray-700"
      } bg-background hover:bg-gray-800 cursor-pointer`}
      onClick={onSelect}
    >
      <IconGripVertical className="text-gray-400 hover:text-white" size={18} />
      <div className="flex items-center space-x-2">
        <span className="text-white text-base">{section.title}</span>
      </div>
    </div>
  );
});

export default DraggableSection;
