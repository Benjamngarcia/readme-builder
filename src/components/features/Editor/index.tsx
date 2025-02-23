"use client";

import { FC, useState, forwardRef, useRef } from "react";
import MDEditor from "@uiw/react-md-editor";
import ReactMarkdown from "react-markdown";
import { useDrop } from "react-dnd";
import { Section } from "../../../types";
import { sectionBank } from "../../../utils/sectionsBank";
import { IconCode, IconEye, IconTrash } from "@tabler/icons-react";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

const Editor: FC = forwardRef<HTMLDivElement>((props, ref) => {
  const [value, setValue] = useState<string>("**Welcome to your custom README.md**");
  const [selectedSection, setSelectedSection] = useState<string | null>(null);

  const sectionsRef = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: "section",
    drop: (item: Section) => {
      const sectionContent = sectionBank[item.id];
      if (sectionContent) {
        setValue((prevValue) => prevValue + "\n\n" + sectionContent);
      } else {
        const sectionContentDynamic = `## ${item.title}\n\n`;
        setValue((prevValue) => prevValue + "\n\n" + sectionContentDynamic);
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  const dropRef = useRef<HTMLDivElement | null>(null);
  const handleDropRef = (node: HTMLDivElement | null) => {
    drop(node);
    dropRef.current = node;
  };

  const handleChange = (newValue?: string): void => {
    if (newValue !== undefined) {
      setValue(newValue);
    }
  };

  const handleSectionClick = (id: string) => {
    setSelectedSection(id === selectedSection ? null : id);
  };

  const getSectionStyle = (id: string) =>
    id === selectedSection
      ? "border-2 border-blue-500 transition-all duration-300 relative rounded-md"
      : "border border-transparent hover:border-blue-500 transition-all duration-300 hover:rounded-md";

  const getSections = (content: string) => {
    return content.split(/\r?\n\s*\r?\n/).map((section, index) => ({
      id: `section-${index}`,
      content: section.trim(),
    }));
  };

  const handleDeleteSection = (id: string) => {
    const sections = getSections(value).filter((section) => section.id !== id);
    setValue(sections.map((section) => section.content).join("\n\n"));
    setSelectedSection(null);
  };

  return (
    <div className="flex space-x-4 p-6 bg-gray-800 text-white rounded-lg h-full max-h-screen">
      <div className="flex-grow min-h-full">
        <div className="flex justify-between items-center mb-4">
          <label className="flex items-center space-x-2 text-gray-300">
            <IconCode size={20} />
            <span>Code</span>
          </label>
        </div>

        <div
          ref={handleDropRef}
          className={`flex-grow p-6 bg-gray-800 max-h-full h-[90%] rounded-lg border-2 border-dashed ${
            canDrop ? "border-blue-500" : "border-gray-500"
          } ${isOver ? "bg-gray-700" : ""}`}
        >
          <MDEditor
            value={value}
            onChange={handleChange}
            preview="edit"
            className="h-full max-h-screen"
            height="100%"
          />
        </div>
      </div>

      <div className="w-1/2 max-h-full overflow-y-auto">
        <div className="flex justify-between items-center">
          <label className="flex items-center space-x-2 text-gray-300">
            <IconEye size={20} />
            <span>Preview</span>
          </label>
        </div>

        <div className="markdown-preview">
          {getSections(value).map((section) => (
            <div
              key={section.id}
              ref={(el) => {
                sectionsRef.current[section.id] = el;
              }}
              className={`p-4 bg-gray-700 text-white cursor-pointer markdown-body 
                ${getSectionStyle(section.id)}`}
              onClick={() => handleSectionClick(section.id)}
            >
              {selectedSection === section.id && (
                <div className="relative group flex justify-end">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteSection(section.id);
                    }}
                    className="absolute text-red-500 border-2 border-red-500 rounded-full p-2 hover:bg-red-500 hover:text-white transition-all"
                  >
                    <IconTrash size={16} />
                  </button>
                  <span className="absolute top-9 right-12 translate-y-[-120%] opacity-0 group-hover:opacity-100 group-hover:translate-y-[-130%] transition-all bg-red-500 text-white text-xs py-1 px-2 rounded-md">
                    Delete section
                  </span>
                </div>
              )}
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeHighlight]}
              >
                {section.content}
              </ReactMarkdown>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

export default Editor;
