import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './task.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Get()
  getAllTasks(): Task[] {
    return this.taskService.getAllTasks();
  }

  @Get('/:id')
  getTaskById(@Param('id') taskId: string): Task {
    return this.taskService.getTaskById(taskId);
  }

  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto) {
    return this.taskService.createTask(createTaskDto);
  }
  @Delete('/:id')
  deleteTask(@Param('id') taskId: string) {
    return this.taskService.deleteTask(taskId);
  }
}
