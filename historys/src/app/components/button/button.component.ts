import { Component } from '@angular/core';
import { NarratorService } from '../../services/narrator.service';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  dataSet: any[] = [];
  currentPage = 2;
  totalItems = 100; 

  constructor(private narratorService:NarratorService ) {
    this.loadData();
  }
}