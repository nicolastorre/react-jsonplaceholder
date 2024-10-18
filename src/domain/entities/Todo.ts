import { ITodo } from "../interfaces/entities/ITodo";

export class Todo implements ITodo {
  constructor(
    public id: number,
    public title: string,
    public completed: boolean,
    public userId: number
  ) {}
}
