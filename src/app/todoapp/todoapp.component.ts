import { Component } from '@angular/core';

@Component({
  selector: 'app-todoapp',
  templateUrl: './todoapp.component.html',
  styleUrl: './todoapp.component.css'
})
export class TodoappComponent {

  taskTitle: string = "";
  taskDate: Date = new Date();
  allTasks: Task[] = [];

  createTask() {
    if (this.taskTitle != "") {
      let task: Task =
      {
        id: this.getRandomTaskId(),
        title: this.taskTitle,
        date: this.taskDate
      };
      this.allTasks.push(task);
      this.taskTitle = "";
      this.taskDate = new Date();
    }
  }
  getRandomTaskId(): string {
    const characterSet = "abcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < 5; i++) {
      result += characterSet.charAt(Math.floor(Math.random() * characterSet.length));
    }
    return result;
  }

  deleteTask(index: number) {
    this.allTasks.splice(index, 1);
  }

}

interface Task {
  id: string,
  title: string,
  date: Date
}