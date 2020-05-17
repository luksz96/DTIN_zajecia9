import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-remove',
  templateUrl: './dialog-remove.component.html',
  styleUrls: ['./dialog-remove.component.css'],
})
export class DialogRemoveComponent implements OnInit {
  constructor(
    public thisDialogRef: MatDialogRef<DialogRemoveComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string
  ) {}

  ngOnInit(): void {}

  closeDialog() {
    this.thisDialogRef.close();
  }

  removeTask() {
    this.thisDialogRef.close(this.data[1]);
  }
}
