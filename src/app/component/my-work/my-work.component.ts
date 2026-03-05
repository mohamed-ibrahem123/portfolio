import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';

export interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  categoryIcon: string;
  year: string;
  image: string;
  tags: string[];
  liveUrl: string;
  codeUrl: string;
  featured?: boolean;
}

@Component({
  selector: 'app-my-work',
  standalone: true,
  imports: [RouterModule, CommonModule, ScrollAnimateDirective],
  templateUrl: './my-work.component.html',
  styleUrl: './my-work.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyWorkComponent {

  filters = ['All', 'Web App'];
  activeFilter = signal('All');

  projects: Project[] = [
    {
      id: 1,
      title: 'Affiliance',
      description: 'Affiliance is a marketing and advertising website that helps businesses grow through strategic digital campaigns, branding, and creative content solutions.',
      category: 'Web App',
      categoryIcon: 'fa-solid fa-layer-group',
      year: '2026',
      image: 'assets/Affiliance.png',
      tags: ['Angular', 'TypeScript', 'HTML5', 'CSS3'],
      liveUrl: '#',
      codeUrl: 'https://github.com/Affiliance/front-end-',
      featured: true
    },
    {
      id: 2,
      title: 'Rafeeq',
      description: 'Rafeeq is a web platform that connects founders with investors, enabling startup discovery, networking, and funding opportunities.',
      category: 'Web App',
      categoryIcon: 'fa-solid fa-layer-group',
      year: '2025',
      image: 'assets/rafeeq.png',
      tags: ['Angular', 'TypeScript', 'HTML5', 'CSS3'],
      liveUrl: 'https://rafeeq-software-project.github.io/frontend-web/',
      codeUrl: 'https://github.com/Rafeeq-Software-Project/frontend-web',
      featured: true
    },

  ];

  get filteredProjects(): Project[] {
    const f = this.activeFilter();
    return f === 'All' ? this.projects : this.projects.filter(p => p.category === f || p.tags.includes(f));
  }

  setFilter(filter: string): void {
    this.activeFilter.set(filter);
  }
}
