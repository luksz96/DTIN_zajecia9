import { Component, OnInit } from '@angular/core';

import { Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../Task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  @Input()
  tasks: Task[];

  @Output()
  remove = new EventEmitter<number>();

  removeTask(taskIdx: number) {
    this.remove.emit(taskIdx);
  }
}
