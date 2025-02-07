import { BaseTodoDto } from "./base-todo.dto";

export class CreateTodoDto extends BaseTodoDto {}

export class UpdateTodoDto extends BaseTodoDto {
  completedAt: Date;
}
