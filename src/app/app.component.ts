import { Component } from '@angular/core';
import { Task } from './Task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'XYZ';

  tasks: Task[] = [];

  handleTaskAdd(description: string) {
    if (description && description.length > 0) {
      this.tasks.push({ description });
    }
  }

  handleTaskRemove(taskIdx: number) {
    this.tasks.splice(taskIdx, 1);
  }

  onKeydown(event, taskvalue) {
    if (event.key == 'Enter') {
      this.handleTaskAdd(taskvalue);
    }
  }
}
