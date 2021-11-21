import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-readonly-field',
  templateUrl: './readonly-field.component.html',
  styleUrls: ['./readonly-field.component.scss'],
})
export class ReadonlyFieldComponent {
  @Input() name: string;
  @Input() value: string;
}
