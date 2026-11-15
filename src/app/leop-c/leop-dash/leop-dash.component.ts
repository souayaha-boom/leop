import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-leop-dash',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './leop-dash.component.html',
  styleUrls: ['./leop-dash.component.css']
})
export class LeopDashComponent {
  stats = [
    { title: 'Candidatures actives', value: '48', icon: 'fas fa-users', color: '#063a4f' },
    { title: 'Missions en cours', value: '12', icon: 'fas fa-briefcase', color: '#c6975f' },
    { title: 'Formations programmées', value: '6', icon: 'fas fa-graduation-cap', color: '#0284c7' },
    { title: 'Taux de satisfaction', value: '98%', icon: 'fas fa-star', color: '#10b981' }
  ];

  recentActivities = [
    { text: 'Nouveau CV reçu pour Responsable Usinage CNC', time: 'Il y a 10 minutes', type: 'cv' },
    { text: 'Demande de recrutement reçue de Plasturgie Rhône-Alpes', time: 'Il y a 1 heure', type: 'recruit' },
    { text: 'Session formation Usinage de Précision confirmée', time: 'Il y a 3 heures', type: 'training' }
  ];
}
