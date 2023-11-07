import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskStatus } from './task-status.enum';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TasksRepository } from './tasks.repository';
import { Task } from './task.entity';

@Injectable()
export class TasksService {
  // Dependency inject TaskRepository

  constructor(
    @InjectRepository(TasksRepository)
    private taskRepository: TasksRepository,
  ) {}

  // getAllTasks(): Task[] {
  //   return this.tasks;
  // }

  // getTasksWithFilters(query: GetTasksFilterDto): Task[] {
  //   const { status, search } = query;

  //   let tasks = this.getAllTasks();

  //   if (status) {
  //     tasks = tasks.filter((task) => {
  //       return task.status === status;
  //     });
  //   }

  //   if (search) {
  //     console.log(search);
  //     tasks = tasks.filter((task) => {
  //       return task.description.includes(search) || task.title.includes(search);
  //     });
  //   }

  //   return tasks;
  // }

  async getTaskById(id: string): Promise<Task> {
    // fetch task from DB
    const foundTask = await this.taskRepository.findOne(id);
    // return error if it doesn't exist
    if (!foundTask) {
      throw new NotFoundException(`Task with id ${id} not found.`);
    }
    // return task if it does exist
    return foundTask;
  }

  createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    return this.taskRepository.createTask(createTaskDto);
  }

  // updateTaskStatus(id: string, status: TaskStatus): Task {
  //   const task = this.getTaskById(id);
  //   task.status = status;
  //   return task;
  // }

  async deleteTaskById(id: string): Promise<void> {
    const foundTask = await this.getTaskById(id);
    await this.taskRepository.remove(foundTask);
  }
}
