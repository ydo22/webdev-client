import { FaCheckCircle } from "react-icons/fa";
import ModuleEditor from "./ModuleEditor";

export default function ModulesControls({
  onAddModule,
}: {
  onAddModule: (moduleName: string) => void;
}) {
  return (
    <div id="wd-modules-controls" className="mb-3 flex flex-wrap items-center gap-2">
      <button
        type="button"
        className="rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm"
      >
        Collapse All
      </button>
      <button
        type="button"
        className="rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm"
      >
        View Progress
      </button>
      <label className="inline-flex items-center gap-1 rounded bg-neutral-300 px-3 py-1.5 text-sm">
        <FaCheckCircle className="text-green-600" />
        <select defaultValue="publish-all" className="cursor-pointer border-0 bg-transparent">
          <option value="publish-all">Publish All</option>
          <option value="unpublish-all">Unpublish All</option>
        </select>
      </label>
      <ModuleEditor onAddModule={onAddModule} />
    </div>
  );
}
