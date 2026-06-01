import { Component, ElementRef, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
})
export class NewTask {
  private formEl = viewChild<ElementRef<HTMLFormElement>>('form');

  onAddTask(title: string, description: string) {
    this.formEl()?.nativeElement.reset();
  }
}
