/* Model for simple task */
export interface TaskModel {
  id: string;
  title: string;
  createDate: Date;
  doneDate?: Date;
  done: boolean;
}
