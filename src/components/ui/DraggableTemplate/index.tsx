"use client";

import { FC, forwardRef } from "react";
import { useDrag } from "react-dnd";
import { Template } from "@/types";
import { IconGripVertical } from "@tabler/icons-react";

interface DraggableTemplateProps {
  template: Template;
  isSelected?: boolean;
  onSelect?: () => void;
}

const DraggableTemplate: FC<DraggableTemplateProps> = forwardRef<
  HTMLDivElement,
  DraggableTemplateProps
>(({ template, isSelected = false, onSelect = () => {} }, ref) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "template",
    item: template,
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

  DraggableTemplate.displayName = "DraggableTemplate";

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
        <span className="text-white text-base">{template.title}</span>
      </div>
    </div>
  );
});

export default DraggableTemplate;
