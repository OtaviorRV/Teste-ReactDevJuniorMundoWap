import { useMemo, useState } from "react";
import { TableStyled, TrTaskStyled } from "./Table.Styled";
import Checkbox from "./InputCheckbox/InputCheckbox";
import { useTaskContext } from "../../providers/TaskProvider";
import { formatDate } from "../../utils/helpers";

interface IColumn {
  Header: string;
  columns: {
    Header: string;
  }[];
}

const TableTask = () => {
  const { tasks, selectTask, deleteTask, insertTask, openModal } =
    useTaskContext();

  const headers = useMemo<IColumn>(
    () => ({
      Header: "Lista de Tarefas",
      columns: [
        { Header: "" },
        { Header: "Descrição" },
        { Header: "Ultimas alterações" },
        { Header: "" },
      ],
    }),
    []
  );

  return tasks.length < 1 ? (
    <h2>Nao ha tarefas a exibir!</h2>
  ) : (
    <TableStyled>
      <thead>
        <tr>
          {headers.columns.map((column, index) => (
            <th key={index}>{column.Header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tasks.map((task, index) => (
          <TrTaskStyled check={task.check} key={index}>
            <td>
              <Checkbox
                key={task.activity + index}
                isCheck={task.check}
                onChange={(e) => e && selectTask(task.activity)}
              />
            </td>
            <td className={task.check ? "isCheck" : ""}>{task.activity}</td>
            <td className={task.check ? "isCheck" : ""}>{`${formatDate(
              task.atualization
            )}`}</td>
            <td>
              <button
                className="buttonEdit"
                disabled={task.check}
                onClick={() => openModal(task)}
              >
                Editar
              </button>
            </td>
          </TrTaskStyled>
        ))}
      </tbody>
    </TableStyled>
  );
};

export default TableTask;
