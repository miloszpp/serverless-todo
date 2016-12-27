import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { AddTaskCommand, Task } from '../../common/model';
import { config } from '../../common/config';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  public tasks: FirebaseListObservable<Task[]>;

  constructor(public http: Http, angularFire: AngularFire) {
    this.tasks = angularFire.database.list('tasks');
  }

  addTask(content: string) {
    const command: AddTaskCommand = { content };
    console.log(`Adding task: ${JSON.stringify(command)}`);
    this.http.post(config.addTaskUrl, command).subscribe(
      () => console.log('Success'),
      error => alert(`Adding task failed with error ${error}`)
    );
  }

}
