
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.css'],
})
export class DataDisplayComponent implements OnInit {
  data: any[] = [];
  loading: boolean = true;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe({
      next: (response) => {
        this.data = response;
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
      },
    });
  }
}
