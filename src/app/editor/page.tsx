"use client";

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { EditorProvider } from '../../context/EditorContext';
import Home from '../../components/layout/Home';

function Editor() {
  return (
    <EditorProvider>
      <DndProvider backend={HTML5Backend}>
        <Home />
      </DndProvider>
    </EditorProvider>
  );
}

export default Editor;
