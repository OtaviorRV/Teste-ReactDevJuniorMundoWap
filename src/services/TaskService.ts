import { ITask } from "../types/task";
import { instance } from "./Axios.config";

export const getRandomTask = async () => {
  return  instance.get<ITask>("/activity").then((response)=>({activity:response.data.activity}));
};
