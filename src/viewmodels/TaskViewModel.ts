import { Task } from '../models/Task';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export class TaskViewModel {
    
  async fetchTasks(userId: string): Promise<Task[]> {
    const response = await fetch(`${API_BASE_URL}/get-tasks/${userId}`);

    const data = await response.json();
    return data.tasks;
  }

  async addTask(userId: string, title: string, description: string): Promise<void> {
    const response = await fetch(`${API_BASE_URL}/add-task`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId, title, description }),
    });
    if (!response.ok) {
      throw new Error('Failed to add task');
    }
  }

  async updateTask(userId: string, taskId: string, isDone: boolean): Promise<void> {
    const response = await fetch(`${API_BASE_URL}/update-task`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId, taskId, isDone }),
    });
    if (!response.ok) {
      throw new Error('Failed to update task');
    }
  }

  async deleteTask(userId: string, taskId: string): Promise<void> {
    const response = await fetch(`${API_BASE_URL}/remove-task`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId, taskId }),
    });
    if (!response.ok) {
      throw new Error('Failed to delete task');
    }
  }
}
