import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-leo-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './leo-login.component.html',
  styleUrls: ['./leo-login.component.css']
})
export class LeoLoginComponent {
  email = '';
  password = '';
  errorMessage = '';
  isLoading = false;

  constructor(private router: Router) {}

  onLogin(): void {
    if (!this.email || !this.password) {
      this.errorMessage = 'Veuillez renseigner votre email et mot de passe.';
      return;
    }
    this.isLoading = true;
    this.errorMessage = '';
    // Simuler connexion ou rediriger vers dashboard
    setTimeout(() => {
      this.isLoading = false;
      this.router.navigate(['/dashboard']);
    }, 800);
  }
}
