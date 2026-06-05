import { afterNextRender, Component, DestroyRef, inject, viewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private form = viewChild.required<NgForm>('form');
  private destroyRef = inject(DestroyRef);

  constructor() {
    afterNextRender(() => {
      const savedEmail = window.localStorage.getItem('saved-login-form');
      if (savedEmail) {
        const loadedEmail = JSON.parse(savedEmail);
        const saveEmail = loadedEmail.email;
        setTimeout(() => {
          this.form().controls['email'].setValue(saveEmail);
        }, 1);
      }

      const subscription = this.form()
        .valueChanges?.pipe(debounceTime(500))
        .subscribe({
          next: (value) =>
            window.localStorage.setItem(
              'saved-login-email',
              JSON.stringify({ email: value.email }),
            ),
        });

      this.destroyRef.onDestroy(() => subscription?.unsubscribe());
    });
  }

  onSubmit(formData: NgForm) {
    if (formData.form.invalid) {
      return;
    }
    console.log(
      `email : ${formData.form.value.email} | password : ${formData.form.value.password}`,
    );

    formData.form.reset();
  }
}
