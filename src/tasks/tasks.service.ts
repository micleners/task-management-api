import { Injectable, NotFoundException } from '@nestjs/common';
import { Task, TaskStatus } from './tasks.model';
import { v4 as uuid } from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [] as Task[];

  getAllTasks(): Task[] {
    return this.tasks;
  }

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

  getTaskById(id: string): Task {
    const task = this.tasks.find((task) => task.id === id);
    if (!task) {
      throw new NotFoundException(`Task with id ${id} not found.`);
    }
    return task;
  }

  createTask(createTaskDto: CreateTaskDto): Task {
    const task: Task = {
      ...createTaskDto,
      id: uuid(),
      status: TaskStatus.OPEN,
    };

    this.tasks.push(task);
    return task;
  }
  updateTaskStatus(id: string, status: TaskStatus): Task {
    const task = this.getTaskById(id);
    task.status = status;
    return task;
  }

  deleteTaskById(id: string): void {
    const foundTask = this.getTaskById(id);
    this.tasks = this.tasks.filter((task) => task.id !== foundTask.id);
  }
}
