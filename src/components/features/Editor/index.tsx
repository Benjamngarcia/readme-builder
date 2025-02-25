"use client";

import { FC, useState, forwardRef, useRef, useEffect } from "react";
import MDEditor from "@uiw/react-md-editor";
import ReactMarkdown from "react-markdown";
import { useDrop } from "react-dnd";
import { Section } from "../../../types";
import { sectionBank } from "../../../utils/sectionsBank";
import {
  IconCode,
  IconEye,
  IconTrash,
  IconDownload,
  IconCopy,
  IconPencil,
} from "@tabler/icons-react";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import Button from "../../../components/ui/Button";
import { useEditorContext } from "../../../context/EditorContext";

const Editor: FC = forwardRef<HTMLDivElement>(() => {
  const {
    selectedSectionId,
    skilliconsLink,
    setSelectedSectionId,
    statsWidgetDetails,
  } = useEditorContext();
  const [sections, setSections] = useState([
    { id: "0", content: "**Welcome to your custom README.md**" },
  ]);

  const [selectedSection, setSelectedSection] = useState<string | null>(null);

  const sectionsRef = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: "section",
    drop: (item: Section) => {
      const sectionContent = sectionBank[item.id] || `## ${item.title}\n\n`;
      const newSection = { id: item.id, content: sectionContent };
      setSections((prevSections) => [...prevSections, newSection]);
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

  const handleSectionClick = (id: string) => {
    setSelectedSection(id === selectedSection ? null : id);
  };

  const getSectionStyle = (id: string) =>
    id === selectedSection
      ? "border-2 border-blue-500 transition-all duration-300 relative rounded-md"
      : "border border-transparent hover:border-blue-500 transition-all duration-300 hover:rounded-md";

  const handleDeleteSection = (id: string) => {
    if (sections.length === 1 && sections[0].id === "0") {
      setSections([]);
    } else {
      setSections((prevSections) =>
        prevSections.filter((section) => section.id !== id)
      );
    }
    setSelectedSection(null);
  };

  const downloadFile = () => {
    const finalContent =
      sections.map((section) => section.content).join("\n\n") +
      "\n\n\n\nThis README was created with: [Readme Builder](https://readmes-builder.vercel.app/)";
    const blob = new Blob([finalContent], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "README.md";
    a.click();
    URL.revokeObjectURL(url);
  };

  const copyToClipboard = () => {
    const finalContent =
      sections.map((section) => section.content).join("\n\n") +
      "\n\n\n\nThis README was created with: [Readme Builder](https://readmes-builder.vercel.app/)";
    navigator.clipboard.writeText(finalContent).then(
      () => alert("Contenido copiado al portapapeles!"),
      (err) => alert("Error al copiar: " + err)
    );
  };

  const handleEditInfoClick = (id: string) => {
    setSelectedSectionId(id);
  };

  useEffect(() => {
    if (selectedSectionId === "13" && skilliconsLink) {
      setSections((prevSections) =>
        prevSections.map((section) =>
          section.id === selectedSectionId
            ? {
                ...section,
                content: section.content.replace(
                  /https:\/\/skillicons.dev\/icons\?i=[\w,]+/,
                  skilliconsLink
                ),
              }
            : section
        )
      );
    }

    if (selectedSectionId === "21" && statsWidgetDetails) {
      const widgetContent = `## GitHub Profile - Stats 📊
![GitHub Stats](https://github-readme-stats.vercel.app/api?username=${statsWidgetDetails.profile}&show_icons=true&count_private=true&hide=prs&hide_title=true&theme=${statsWidgetDetails.theme}&hide_border=${statsWidgetDetails.hideBorder})`;
      setSections((prevSections) =>
        prevSections.map((section) =>
          section.id === selectedSectionId
            ? { ...section, content: widgetContent }
            : section
        )
      );
    }

    if (selectedSectionId === "23" && statsWidgetDetails) {
      const widgetContent = `## GitHub Profile - GitHub Contributions 🌱
![GitHub Contributions](https://github-readme-streak-stats.herokuapp.com/?user=${statsWidgetDetails.profile}&theme=${statsWidgetDetails.theme}&hide_border=${statsWidgetDetails.hideBorder})`;
      setSections((prevSections) =>
        prevSections.map((section) =>
          section.id === selectedSectionId
            ? { ...section, content: widgetContent }
            : section
        )
      );
    }
  }, [selectedSectionId, skilliconsLink, statsWidgetDetails]);

  Editor.displayName = "Editor";
  return (
    <div className="flex flex-col lg:flex-row space-x-4 p-6 border border-gray-700 bg-background text-white rounded-xl h-full max-h-screen">
      {/* Code Editor Section */}
      <div className="flex-grow min-h-full bg-backgroundSecondary rounded-lg shadow-lg p-4">
        <div className="flex justify-between items-center mb-4">
          <label className="flex items-center space-x-2 text-gray-300">
            <IconCode size={20} />
            <span>Code</span>
          </label>
          <div className="flex space-x-4">
            <Button
              onClick={downloadFile}
              color="green"
              size="small"
              variant="outlined"
              icon={<IconDownload size={16} />}
            >
              Download
            </Button>
            <Button
              onClick={copyToClipboard}
              color="gray"
              size="small"
              variant="outlined"
              icon={<IconCopy size={16} />}
            />
          </div>
        </div>

        <div
          ref={handleDropRef}
          className={`flex-grow bg-rbackgroundSecondary p-4 rounded-lg border-2 border-dashed transition-all duration-300 ${
            canDrop ? "border-blue-500" : "border-gray-500"
          } ${isOver ? "bg-gray-700" : ""}`}
        >
          <MDEditor
            value={sections.map((section) => section.content).join("\n\n")}
            onChange={(newValue) => {
              const updatedSections = (newValue ?? "")
                .split("\n\n")
                .map((content, index) => ({
                  id: sections[index]?.id || `${index}`,
                  content,
                }));
              setSections(updatedSections);
            }}
            preview="edit"
            className="h-full w-full rounded-lg border-non bg-red-500"
            height="100%"
          />
        </div>
      </div>

      {/* Preview Section */}
      <div className="w-full lg:w-1/2 max-h-full overflow-y-auto bg-backgroundSecondary rounded-lg shadow-lg p-4">
        <div className="flex justify-between items-center mb-4">
          <label className="flex items-center space-x-2 text-gray-300">
            <IconEye size={20} />
            <span>Preview</span>
          </label>
        </div>

        <div className="markdown-preview">
          {sections.map((section) => (
            <div
              key={section.id}
              ref={(el) => {
                sectionsRef.current[section.id] = el;
              }}
              className={`p-4 bg-backgroundSecondary text-white cursor-pointer markdown-body ${getSectionStyle(
                section.id
              )}`}
              onClick={() => handleSectionClick(section.id)}
            >
              <div className="flex gap-2 mb-2">
                {selectedSection === section.id && (
                  <Button
                    onClick={() => handleDeleteSection(section.id)}
                    size="small"
                    color="red"
                    variant="outlined"
                    icon={<IconTrash size={16} />}
                  >
                    Delete section
                  </Button>
                )}

                {section.id == "13" ||
                section.id === "21" ||
                section.id === "23" ? (
                  <Button
                    onClick={() => handleEditInfoClick(section.id)}
                    size="small"
                    color="blue"
                    variant="outlined"
                    icon={<IconPencil size={16} />}
                  >
                    Edit Info
                  </Button>
                ) : null}
              </div>

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
