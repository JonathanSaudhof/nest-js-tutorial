import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';

interface CreateTaskProps {
  title: string;
  description: string;
}

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks() {
    return this.tasks;
  }

  getTaskById(taskId: string) {
    return this.tasks.find((task) => task.id === taskId);
  }

  createTask(createTaskDto: CreateTaskProps): Task {
    const { title, description } = createTaskDto;

    const task: Task = {
      id: new Date().getTime().toString(32),
      title,
      description,
      status: TaskStatus.OPEN,
    };

    this.tasks.push(task);

    return task;
  }

  deleteTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
    return;
  }
}
