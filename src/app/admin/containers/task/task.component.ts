import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';


import { Task } from '@admin/models/task.model';

@Component({
  selector: 'app-task',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
