import { Component } from '@angular/core';

import { Task } from './models/task.model'

@Component({
  selector: 'app-root-cray',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css'
  ]
})


export class AppComponent {
  title = 'To Do';
  currentFocus: string = 'Angular Homework';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();

  selectedTask: Task = null;

  masterTaskList: Task[] = [
      new Task('Finish weekend Angular homework for Epicodus course', 3),
      new Task('Begin brainstorming possible JavaScript group projects', 2),
      new Task('Add README file to last few Angular repos on GitHub', 2)

    ];

  anEvenBiggerListOfTasks: Task[] = [
        new Task('Finish weekend Angular homework for Epicodus course', 3),
        new Task('Begin brainstorming possible JavaScript group projects', 2),
        new Task('Add README file to last few Angular repos on GitHub', 2),
        new Task('another thing to do',1)
  ]

  editTask(clickedTask) {
    this.selectedTask = clickedTask;
  }

  finishedEditing() {
    this.selectedTask = null;
  }


}
