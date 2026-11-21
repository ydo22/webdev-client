import { FaPencilAlt, FaTrash } from "react-icons/fa";
import { BsPlus } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import { useModulesStore } from "../../../store/modulesStore";

export default function ModuleControlButtons({
  moduleId,
  onRemoveModule,
}: {
  moduleId: string;
  onRemoveModule: (moduleId: string) => void;
}) {
  const editModule = useModulesStore((state) => state.editModule);
  return (
    <span className="flex shrink-0 items-center gap-3">
      <FaPencilAlt
        className="cursor-pointer text-blue-600"
        title="Edit module"
        onClick={() => editModule(moduleId)}
      />
      <FaTrash
        className="cursor-pointer text-red-600"
        title="Delete module"
        onClick={() => onRemoveModule(moduleId)}
      />
      <GreenCheckmark />
      <BsPlus className="text-3xl" />
      <IoEllipsisVertical className="text-xl" />
    </span>
  );
}
