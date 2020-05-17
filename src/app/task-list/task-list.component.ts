import { Component, OnInit, Renderer2 } from '@angular/core';

import { Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../Task';

import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { MatDialogConfig } from '@angular/material/dialog';
import { DialogRemoveComponent } from '../dialog-remove/dialog-remove.component';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  constructor(private dialog: MatDialog, private renderer: Renderer2) {}

  ngOnInit() {}

  @Input()
  tasks: Task[];

  @Output()
  remove = new EventEmitter<number>();

  isDone: boolean = false;

  removeTask(taskIdx: number) {
    this.remove.emit(taskIdx);
  }

  openRemoveDialog(taskIdx: number, description: string) {
    let dialogRef = this.dialog.open(DialogRemoveComponent, {
      width: '600px',
      data: [description, taskIdx],
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result == taskIdx) {
        this.removeTask(result);
      }
    });
  }

  handleDoneTask() {
    const element: HTMLElement = document.getElementById('toStrike');
    if (!this.isDone) {
      this.renderer.addClass(element, 'isDoneTrue');
      this.isDone = true;
    } else {
      console.log('works');
      this.renderer.removeClass(element, 'isDoneTrue');
      this.isDone = false;
    }
  }
}
