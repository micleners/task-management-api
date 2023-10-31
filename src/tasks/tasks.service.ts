import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './tasks.model';
import { v4 as uuid } from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [] as Task[];

  getTasksWithFilters(query: GetTasksFilterDto): Task[] {
    const { status, search } = query;

    let tasks = this.getAllTasks();

    if (status) {
      tasks = tasks.filter((task) => {
        return task.status === status;
      });
    }

    if (search) {
      console.log(search);
      tasks = tasks.filter((task) => {
        return task.description.includes(search) || task.title.includes(search);
      });
    }

    return tasks;
  }

  updateTaskStatus(id: string, status: TaskStatus): Task {
    const task = this.tasks.find((task) => task.id === id);
    task.status = status;
    return task;
  }

  getTaskById(id: string): Task {
    const task = this.tasks.find((task) => task.id === id);
    if (!task) {
      throw new Error('Task not found');
    }
    return task;
  }

  deleteTaskById(id: string): void {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  getAllTasks(): Task[] {
    return this.tasks;
  }

  createTask(createTaskDto: CreateTaskDto): Task {
    const task: Task = {
      ...createTaskDto,
      id: uuid(),
      status: TaskStatus.OPEN,
    };

    console.log(task);
    this.tasks.push(task);
    return task;
  }
}
