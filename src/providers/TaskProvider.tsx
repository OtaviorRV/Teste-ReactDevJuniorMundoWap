import { ReactNode, createContext, useContext, useState } from "react";
import Modal from "../components/modal/Modal";

export interface ITask {
  activity: string;
  atualization: Date;
  check: boolean;
}

interface ITaskContext {
  tasks: Array<ITask>;
}

interface ITaskProvider extends ITaskContext {
  insertTask: (task: ITask) => void;
  selectTask: (taskName: string) => void;
  deleteTask: (taskName: string) => void;
  editTask: (task: ITask, oldTask: ITask) => void;
  openModal: (task?: ITask) => void;
  closeModal: () => void;
  countTasksChecked: () => number;
}

const TaskContext = createContext<ITaskProvider>({
  tasks: [],
  deleteTask: () => {},
  insertTask: () => {},
  selectTask: () => {},
  editTask: () => {},
  openModal: () => {},
  closeModal: () => {},
  countTasksChecked: () => 0,
});

interface ITaskProviderProps {
  children: ReactNode;
}

const TaskProvider = ({ children }: ITaskProviderProps) => {
  const [tasks, setTasks] = useState<Array<ITask>>([]);
  const [task, setTask] = useState<ITask | null>(null);

  const [modalState, setModalState] = useState<boolean>(false);

  const deleteTask = (taskName: string) => {};
  const insertTask = (task: ITask) => {
    setTasks([task,...tasks ]);
  };

  const selectTask = (taskName: string) => {
    const cloneTasks = tasks.map((task) => ({ ...task }));
    const indexTask = tasks.findIndex((task) => task.activity === taskName);

    if (indexTask !== -1) {
      const removedItem = cloneTasks.splice(indexTask, 1)[0];
      removedItem.check = true;
      cloneTasks.push(removedItem);
      setTasks(cloneTasks);
    }
  };

  const editTask = (task: ITask, oldTask: ITask) => {
    const cloneTasks = tasks.map((task) => ({ ...task }));
    const indexTask = tasks.findIndex(
      (task) => task.activity === oldTask.activity
    );

    if (indexTask !== -1) {
      cloneTasks[indexTask] = task;
      setTasks(cloneTasks);
    }
  };

  const openModal = async (task?: ITask) => {
    setTask(task || null);
    setModalState(true);
  };
  const closeModal = () => {
    setModalState(false);
  };
  const countTasksChecked = () => {
    return tasks.filter((task) => !task.check).length;
  };

  const state: ITaskProvider = {
    tasks,
    deleteTask,
    insertTask,
    selectTask,
    editTask,
    openModal,
    closeModal,
    countTasksChecked,
  };

  return (
    <TaskContext.Provider value={state}>
      {children}
      <Modal task={task} isOpen={modalState} onClose={() => closeModal()} />
    </TaskContext.Provider>
  );
};

const useTaskContext = (): ITaskProvider => useContext(TaskContext);

export default TaskProvider;
export { useTaskContext };

