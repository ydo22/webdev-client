import { BsGripVertical } from "react-icons/bs";
import Lesson from "./Lesson";
import ModuleControlButtons from "./ModuleControlButtons";
import { useModulesStore, type CourseModule } from "../../../store/modulesStore";

export default function Module({
  module,
  onUpdateModule,
  onRemoveModule,
}: {
  module: CourseModule;
  onUpdateModule: (module: CourseModule) => void;
  onRemoveModule: (moduleId: string) => void;
}) {
  // Typing only changes the local cache; Enter saves to the server.
  const updateModule = useModulesStore((state) => state.updateModule);
  return (
    <li className="wd-module mb-5 overflow-hidden border border-neutral-400 p-0 text-xl">
      <div className="wd-title flex items-center justify-between gap-2 bg-neutral-200 p-3 ps-2">
        <span className="flex min-w-0 flex-1 items-center gap-2">
          <BsGripVertical className="shrink-0 text-2xl" />
          {module.editing ? (
            <input
              className="w-1/2 rounded border border-neutral-300 bg-white px-2 py-1 text-base"
              defaultValue={module.name}
              autoFocus
              onChange={(e) => updateModule({ ...module, name: e.target.value })}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  onUpdateModule({ ...module, editing: false });
                }
              }}
            />
          ) : (
            module.name
          )}
        </span>
        <ModuleControlButtons
          moduleId={module._id}
          onRemoveModule={onRemoveModule}
        />
      </div>
      <ul className="wd-lessons m-0 list-none p-0">
        {module.lessons?.map((lesson) => (
          <Lesson key={lesson._id} title={lesson.name} />
        ))}
      </ul>
    </li>
  );
}
