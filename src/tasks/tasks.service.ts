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

  async getTasks(filterDto: GetTasksFilterDto): Promise<Task[]> {
    return this.taskRepository.getTasks(filterDto);
  }

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

  async updateTaskStatus(id: string, status: TaskStatus): Promise<Task> {
    const task = await this.getTaskById(id);
    task.status = status;
    this.taskRepository.save(task);
    return task;
  }

  async deleteTaskById(id: string): Promise<void> {
    const result = await this.taskRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Task with id ${id} not found.`);
    }
  }
}
