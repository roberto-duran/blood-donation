import {CommonModule} from '@angular/common';
import { Component, Input } from '@angular/core';
import {FormControl, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'shared-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  standalone: true
})
export class InputComponent {
  @Input() control: FormControl = new FormControl()
  @Input() type = 'text'
  @Input() placeholder = ''
  @Input() format = ''
  constructor() {
  }

}
