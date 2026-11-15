import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

interface JobOffer {
  id: string;
  title: string;
  company: string;
  location: string;
  contract: string;
  salary: string;
  remote?: string;
  badge?: string;
  isFavorite?: boolean;
}

interface Testimonial {
  type: 'stat' | 'quote' | 'review';
  title?: string;
  content: string;
  author?: string;
  bgColor?: string;
  textColor?: string;
}

@Component({
  selector: 'app-leop',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, HttpClientModule],
  templateUrl: './leop.component.html',
  styleUrls: ['./leop.component.css']
})
export class LeopComponent implements OnInit {
  // Navigation & Drawer
  isMobileMenuOpen = false;
  activeDropdown: string | null = null;

  // Search
  searchKeyword = '';
  searchLocation = '';
  activeSectorFilter = '';
  activeLocationFilter = '';
  activeJobTypeFilter = '';

  // Solutions RH Tabs
  activeSolutionTab: 'specialises' | 'dirigeants' | 'rpo' = 'specialises';

  // Premium Jobs Carousel - Spécialités Plasturgie, Usinage & Industrie
  currentJobSlide = 0;
  premiumJobs: JobOffer[] = [
    {
      id: 'job-1',
      title: 'Responsable d\'Atelier Usinage CNC H/F',
      company: 'Industrie Mécanique & Précision',
      location: 'Rhône-Alpes / Lyon',
      contract: 'CDI',
      salary: '45 000 € - 55 000 € par an',
      remote: 'Sur site',
      badge: 'Usinage & Outillage',
      isFavorite: false
    },
    {
      id: 'job-2',
      title: 'Ingénieur Process Plasturgie & Injection H/F',
      company: 'Groupe Plasturgie & Moules',
      location: 'Oyonnax / Ain',
      contract: 'CDI',
      salary: '50 000 € - 65 000 € par an',
      remote: 'Temps plein',
      badge: 'Plasturgie',
      isFavorite: false
    },
    {
      id: 'job-3',
      title: 'Technicien Régleur Outillage & Polissage H/F',
      company: 'Fabrication Moules & Matrices',
      location: 'Grand Est',
      contract: 'CDI',
      salary: '35 000 € - 42 000 € par an',
      badge: 'Offre PREMIUM',
      isFavorite: true
    },
    {
      id: 'job-4',
      title: 'Chef de Projet Industrialisation & Méthodes H/F',
      company: 'Site Industriel Automobile & Aéro',
      location: 'Île-de-France',
      contract: 'CDI',
      salary: '55 000 € - 70 000 € par an',
      badge: 'Méthodes Industrielles',
      isFavorite: false
    },
    {
      id: 'job-5',
      title: 'Directeur des Opérations Industrielles H/F',
      company: 'Groupe Plasturgie & Usinage',
      location: 'Hauts-de-France',
      contract: 'CDI',
      salary: '80 000 € - 100 000 € par an',
      badge: 'Direction de Site',
      isFavorite: false
    }
  ];

  // Why Choose Us / Testimonials (Leop-Consulting: 1 an d'expérience, Plasturgie & Usinage)
  currentTestimonialSlide = 0;
  testimonials: Testimonial[] = [
    {
      type: 'stat',
      title: '1',
      content: "an d'expérience, et des relations industrielles qui durent",
      bgColor: '#faeedb',
      textColor: '#042735'
    },
    {
      type: 'quote',
      content: "Fiabilité, transparence, engagement : on dit ce qu'on fait, on fait ce qu'on dit.",
      bgColor: '#063a4f',
      textColor: '#ffffff'
    },
    {
      type: 'review',
      content: "Leop-Consulting a une excellente connaissance de notre environnement d'affaires industriel. Notre consultant dédié a analysé nos outillages de plasturgie avant conception avec un niveau d'exigence et d'adéquation remarquable.",
      author: 'Directeur de Site Industriel — Plasturgie & Injection',
      bgColor: '#ffffff',
      textColor: '#334155'
    },
    {
      type: 'review',
      content: "Très satisfait de notre collaboration avec Leop-Consulting : réactivité remarquable et vivier d'usineurs et outilleurs hautement qualifiés présentés avec rigueur dans une période charnière de notre production.",
      author: 'Directeur des Ressources Humaines Industriel',
      bgColor: '#ffffff',
      textColor: '#334155'
    },
    {
      type: 'review',
      content: "L'accompagnement sur le choix des outils de coupe et les conditions d'usinage nous a fait gagner en précision géométrique et en productivité. Un vrai partenaire de confiance !",
      author: 'Responsable d\'Atelier Usinage & Mécanique de Précision',
      bgColor: '#ffffff',
      textColor: '#334155'
    }
  ];

  // Modals
  showCvModal = false;
  showRecruitModal = false;
  showVideoModal = false;

  // CV Form
  cvForm = {
    fullName: '',
    email: '',
    phone: '',
    domain: '',
    selectedFile: null as File | null,
    fileName: '',
    submitted: false,
    loading: false,
    errorMessage: ''
  };

  // Recruit Form
  recruitForm = {
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    jobTitle: '',
    message: '',
    submitted: false,
    loading: false
  };

  constructor(
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }

  toggleDropdown(name: string): void {
    this.activeDropdown = this.activeDropdown === name ? null : name;
  }

  toggleFavorite(job: JobOffer, event: Event): void {
    event.stopPropagation();
    job.isFavorite = !job.isFavorite;
  }

  // Premium Jobs Navigation
  nextJobSlide(): void {
    if (this.currentJobSlide < this.premiumJobs.length - 3) {
      this.currentJobSlide++;
    } else {
      this.currentJobSlide = 0;
    }
  }

  prevJobSlide(): void {
    if (this.currentJobSlide > 0) {
      this.currentJobSlide--;
    } else {
      this.currentJobSlide = Math.max(0, this.premiumJobs.length - 3);
    }
  }

  // Testimonials Navigation
  nextTestimonial(): void {
    if (this.currentTestimonialSlide < this.testimonials.length - 2) {
      this.currentTestimonialSlide++;
    } else {
      this.currentTestimonialSlide = 0;
    }
  }

  prevTestimonial(): void {
    if (this.currentTestimonialSlide > 0) {
      this.currentTestimonialSlide--;
    } else {
      this.currentTestimonialSlide = Math.max(0, this.testimonials.length - 2);
    }
  }

  // Search Action
  onSearch(): void {
    const query = this.searchKeyword.trim();
    const loc = this.searchLocation.trim();
    this.router.navigate(['/jobs'], {
      queryParams: {
        search: query || undefined,
        location: loc || undefined
      }
    });
  }

  // Modals Actions
  openCvModal(): void {
    this.showCvModal = true;
    this.cvForm.submitted = false;
  }

  closeCvModal(): void {
    this.showCvModal = false;
  }

  openRecruitModal(): void {
    this.showRecruitModal = true;
    this.recruitForm.submitted = false;
  }

  closeRecruitModal(): void {
    this.showRecruitModal = false;
  }

  openVideoModal(): void {
    this.showVideoModal = true;
  }

  closeVideoModal(): void {
    this.showVideoModal = false;
  }

  onFileSelected(event: any): void {
    const file = event.target.files?.[0];
    if (file) {
      this.cvForm.selectedFile = file;
      this.cvForm.fileName = file.name;
    }
  }

  submitCv(): void {
    if (!this.cvForm.fullName.trim() || !this.cvForm.email.trim()) return;

    this.cvForm.loading = true;
    this.cvForm.errorMessage = '';

    const formData = new FormData();
    if (this.cvForm.selectedFile) {
      formData.append('cv', this.cvForm.selectedFile);
      formData.append('file', this.cvForm.selectedFile);
    }

    const nameParts = this.cvForm.fullName.trim().split(' ');
    const prenom = nameParts[0] || '';
    const nom = nameParts.slice(1).join(' ') || prenom;

    formData.append('fullName', this.cvForm.fullName.trim());
    formData.append('candidateName', this.cvForm.fullName.trim());
    formData.append('first_name', prenom);
    formData.append('last_name', nom);
    formData.append('prenom', prenom);
    formData.append('nom', nom);

    formData.append('email', this.cvForm.email.trim().toLowerCase());
    formData.append('candidateEmail', this.cvForm.email.trim().toLowerCase());
    formData.append('phone', (this.cvForm.phone || '').trim());
    formData.append('telephone', (this.cvForm.phone || '').trim());

    const dom = this.cvForm.domain || 'Industrie & Plasturgie';
    formData.append('domaine', dom);
    formData.append('qualification', dom);

    formData.append('company', 'Leop-Consulting');
    formData.append('entreprise', 'Leop-Consulting');
    formData.append('poste', 'Candidature Leop-Consulting');
    formData.append('origine_cv', 'Leop-Consulting');
    formData.append('is_spontaneous', 'true');
    formData.append('status', 'pending');

    this.http.post<any>('/api/apply_job', formData).subscribe({
      next: () => {
        this.cvForm.loading = false;
        this.cvForm.submitted = true;
        setTimeout(() => {
          this.closeCvModal();
          this.cvForm = {
            fullName: '',
            email: '',
            phone: '',
            domain: '',
            selectedFile: null,
            fileName: '',
            submitted: false,
            loading: false,
            errorMessage: ''
          };
        }, 2500);
      },
      error: (err) => {
        // Fallback to /api/cv/apply_job
        this.http.post<any>('/api/cv/apply_job', formData).subscribe({
          next: () => {
            this.cvForm.loading = false;
            this.cvForm.submitted = true;
            setTimeout(() => {
              this.closeCvModal();
              this.cvForm = {
                fullName: '',
                email: '',
                phone: '',
                domain: '',
                selectedFile: null,
                fileName: '',
                submitted: false,
                loading: false,
                errorMessage: ''
              };
            }, 2500);
          },
          error: (err2) => {
            this.cvForm.loading = false;
            const msg = err2?.error?.error || err?.error?.error || 'Une erreur est survenue lors du dépôt de votre CV.';
            this.cvForm.errorMessage = msg;
          }
        });
      }
    });
  }

  submitRecruit(): void {
    if (!this.recruitForm.companyName || !this.recruitForm.email) return;
    this.recruitForm.submitted = true;
    setTimeout(() => {
      this.closeRecruitModal();
      this.recruitForm = {
        companyName: '',
        contactName: '',
        email: '',
        phone: '',
        jobTitle: '',
        message: '',
        submitted: false,
        loading: false
      };
    }, 2000);
  }

  scrollToSection(sectionId: string): void {
    this.closeMobileMenu();
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
