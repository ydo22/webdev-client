"use client";

import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useParams } from "next/navigation";
import { useModulesStore } from "../../../store/modulesStore";

export default function ModuleEditor() {
  const { cid } = useParams();
  const addModule = useModulesStore((state) => state.addModule);
  const [show, setShow] = useState(false);
  const [moduleName, setModuleName] = useState("");
  const handleClose = () => setShow(false);
  const handleAdd = () => {
    if (moduleName.trim()) {
      addModule({ name: moduleName, course: String(cid) });
    }
    setModuleName("");
    handleClose();
  };
  return (
    <>
      <button
        type="button"
        id="wd-add-module-btn"
        className="inline-flex items-center gap-1 rounded border border-red-600 bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
        onClick={() => setShow(true)}
      >
        <FaPlus /> Module
      </button>
      {show && (
        <div
          id="wd-add-module-dialog"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
        >
          <div className="w-full max-w-md rounded-lg bg-white shadow-lg">
            <div className="flex items-center justify-between border-b border-neutral-200 px-4 py-3">
              <h3 className="m-0 text-xl font-normal">Add Module</h3>
              <button
                type="button"
                aria-label="Close"
                className="cursor-pointer border-0 bg-transparent text-2xl leading-none text-neutral-500"
                onClick={handleClose}
              >
                ×
              </button>
            </div>
            <div className="px-4 py-3">
              <input
                id="wd-add-module-name"
                className="w-full rounded border border-neutral-300 px-3 py-1.5"
                placeholder="Module name"
                value={moduleName}
                onChange={(e) => setModuleName(e.target.value)}
              />
            </div>
            <div className="flex justify-end gap-2 border-t border-neutral-200 px-4 py-3">
              <button
                type="button"
                id="wd-add-module-cancel"
                className="cursor-pointer rounded border-0 bg-neutral-300 px-3 py-1.5 text-sm"
                onClick={handleClose}
              >
                Cancel
              </button>
              <button
                type="button"
                id="wd-add-module-submit"
                className="cursor-pointer rounded border-0 bg-red-600 px-3 py-1.5 text-sm text-white"
                onClick={handleAdd}
              >
                Add Module
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
