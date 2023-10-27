import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './tasks.model';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTasks(): Task[] {
    return this.tasksService.getAllTasks();
  }

  @Get(':id')
  getTaskById(@Param() params: any): Task {
    console.log(params.id, '!');
    return this.tasksService.getTaskById(params.id);
  }

  @Delete(':id')
  deleteTaskById(@Param() params: any): void {
    this.tasksService.deleteTaskById(params.id);
  }

  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto): Task {
    return this.tasksService.createTask(createTaskDto);
  }

  @Patch(':id/status')
  updateTaskStatus(@Param() params: any, @Body() body: any): Task {
    return this.tasksService.updateTaskStatus(params.id, body.status);
  }
}
