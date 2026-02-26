import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [RouterModule, FormsModule, ScrollAnimateDirective, CommonModule],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactMeComponent {

  isSubmitting = signal(false);
  submitted = signal(false);

  onSubmit(): void {
    if (this.isSubmitting()) return;
    this.isSubmitting.set(true);

    // Simulate send (replace with real service call later)
    setTimeout(() => {
      this.isSubmitting.set(false);
      this.submitted.set(true);
    }, 1200);
  }
}
