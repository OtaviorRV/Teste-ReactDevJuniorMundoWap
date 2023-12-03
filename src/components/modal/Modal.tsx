import { useEffect } from "react";
import { ModalStyled, ButtonModal } from "./Modal.Styled";

import { useForm, SubmitHandler } from "react-hook-form";
import { getRandomTask } from "../../services/TaskService";
import { ITask } from "../../types/task";
import { useTaskContext } from "../../providers/TaskProvider";

interface IModal {
  isOpen: boolean;
  onClose: () => void;
  task: ITask | null;
}

type Inputs = {
  activity: string;
};

const Modal = ({ isOpen, onClose, task }: IModal) => {
  const { insertTask, editTask, closeModal } = useTaskContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm<Inputs>();

  useEffect(() => {
    if (!isOpen) {
      reset();
    }
    if (isOpen && task) {
      setValue(`activity`, task.activity);
    }
  }, [isOpen, task]);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (!task) {
      insertTask({
        activity: data.activity,
        check: false,
        atualization: new Date(),
      });
    } else {
      editTask(
        {
          activity: data.activity,
          check: false,
          atualization: new Date(),
        },
        {
          activity: task.activity,
          check: false,
          atualization: new Date(),
        }
      );
    }

    closeModal();
  };

  const addTask = async () => {
    const { activity } = await getRandomTask();
    setValue("activity", activity);
  };
  if (!isOpen) {
    return null;
  }

  return (
    <ModalStyled>
      <form className="content" onSubmit={handleSubmit(onSubmit)}>
        <div className="bodyModal">
          <h2 className="titleModal">
            {" "}
            {task?.activity ? "Edite sua Tarefa" : "Crie sua Tarefa"}
          </h2>

          <input  placeholder= {task?.activity ? "" : "Digite aqui sua tarefa"} className="inputModal" {...register("activity", { required: true ,minLength:10})} />
          {errors.activity && <span>Esse campo e obrigatorio e precisa ter no minimo 10 (dez) caracteres!</span>}
        </div>
        <div className="footerModal">
          <ButtonModal
            variant={task?.activity ? "Salvar" : "Criar"}
            className="buttonModal"
            type="submit"
          >
            {task?.activity ? "Salvar" : "Criar"}
          </ButtonModal>
          <ButtonModal
            variant="Sugestao"
            className="buttonModal"
            type="button"
            onClick={addTask}
          >
            Sugestao
          </ButtonModal>
          <ButtonModal
            variant="Cancelar"
            className="buttonModal"
            type="button"
            onClick={onClose}
          >
            Cancelar
          </ButtonModal>
        </div>
      </form>
    </ModalStyled>
  );
};

export default Modal;
