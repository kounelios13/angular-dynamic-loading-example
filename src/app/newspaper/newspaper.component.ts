import { Component, Input } from '@angular/core';
import { AdComponent } from '../ad.component';

@Component({
  selector: 'app-newspaper',
  templateUrl: './newspaper.component.html',
  styleUrls: ['./newspaper.component.css'],
})
export class NewspaperComponent implements AdComponent {
  @Input() data: any;
}
