import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProgressBarService, PwaService } from '@core/services';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent implements OnInit {
  progressBarMode: string | undefined;
  @Input() title: string = '';
  constructor(
    private router: Router,
    private progressBarService: ProgressBarService,
    private pwaService: PwaService
  ) {
    this.progressBarService.updateProgressBar$.subscribe((mode: string) => {
      this.progressBarMode = mode;
    });
  }

  ngOnInit(): void {
    this.pwaService.init();
  }
}
