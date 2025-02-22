"use client";

import { FC, useState, forwardRef } from "react";
import MDEditor from "@uiw/react-md-editor";
import { useDrop } from "react-dnd";
import { Section } from "../../../types";
import { sectionBank } from "../../../utils/sectionsBank";
import { IconCode, IconEye } from "@tabler/icons-react";

const Editor: FC = forwardRef<HTMLDivElement>((props, ref) => {
  const [value, setValue] = useState<string>(
    "**Welcome to your custom README.md**"
  );

  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: "section",
    drop: (item: Section) => {
      const sectionContent = sectionBank[item.id];
      if (sectionContent) {
        setValue((prevValue) => prevValue + "\n" + sectionContent);
      } else {
        const sectionContentDynamic = `## ${item.title}\n\n`;
        setValue((prevValue) => prevValue + "\n" + sectionContentDynamic);
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  const dropRef = (node: HTMLDivElement | null) => {
    drop(node);
    if (ref && typeof ref === "function") {
      ref(node);
    } else if (ref && "current" in ref) {
      if (node) {
        (ref as React.RefObject<HTMLDivElement>).current = node;
      }
    }
  };

  const handleChange = (value?: string): void => {
    if (value !== undefined) {
      setValue(value);
    }
  };

  return (
    <div className="flex flex-col space-y-4 p-6 bg-gray-800 text-white rounded-lg h-full">
      <div className="flex justify-between items-center">
        <label className="flex items-center space-x-2 text-gray-300">
          <IconCode size={20} />
          <span>Code</span>
        </label>
        <label className="flex items-center space-x-2 text-gray-300">
          <IconEye size={20} />
          <span>Preview</span>
        </label>
      </div>
      <div
        ref={dropRef}
        className={`mt-4 p-6 bg-gray-800 rounded-lg border-2 border-dashed ${
          canDrop ? "border-blue-500" : "border-gray-500"
        } ${isOver ? "bg-gray-700" : ""} flex-grow`}
      >
        <MDEditor value={value} onChange={handleChange} />
      </div>
    </div>
  );
});

export default Editor;
