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

  return (
    <div
      ref={dragRef}
      className={`flex items-center justify-between p-4 border-2 rounded-md my-2 ${
        isDragging || isSelected ? "border-blue-500" : "border-gray-500"
      } 
      bg-gray-800 hover:bg-gray-700 cursor-pointer`}
      onClick={onSelect}
    >
      <div className="flex items-center space-x-2">
        <span className="text-white text-lg font-semibold">{section.title}</span>
      </div>
      <IconGripVertical className="text-gray-400 hover:text-white cursor-pointer" size={20} />
    </div>
  );
});

export default DraggableSection;
