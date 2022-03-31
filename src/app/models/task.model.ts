export interface TaskModel {
  id: string;
  title: string;
  createDate: Date;
  doneDate?: Date;
  done: boolean;
}

export interface TaskStoreModel {
  [key: string]: TaskModel;
}