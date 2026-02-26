import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ScrollAnimateDirective, CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  selectedImage = signal<string | null>(null);

  services = [
    {
      icon: 'fa-solid fa-layer-group',
      title: 'Web Architecture',
      desc: 'Designing scalable and maintainable frontend architectures using Angular best practices.'
    },
    {
      icon: 'fa-solid fa-mobile-screen-button',
      title: 'Responsive Design',
      desc: 'Crafting pixel-perfect layouts that work seamlessly across all devices and resolutions.'
    },
    {
      icon: 'fa-solid fa-gauge-high',
      title: 'Performance Optimization',
      desc: 'Optimizing web apps for maximum speed , and smooth user interactions.'
    },
    {
      icon: 'fa-solid fa-wand-magic-sparkles',
      title: 'UI/UX Implementation',
      desc: 'Translating complex designs into interactive , high-fidelity user interfaces.'
    }
  ];

  experience = [
    {
      year: '2024 - Present',
      title: 'Frontend Developer',
      company: 'Self study',
      desc: 'started learning Front-End development from various YouTube resources and gradually improved my skills step by step through continuous practice and self-learning.'
    },
    {
      year: '2023 - 2027',
      title: 'Academic Focus',
      company: 'Mansoura University',
      desc: 'Mastering core computer science concepts, algorithms, and web technologies.'
    }
  ];

  openImage(img: string) {
    this.selectedImage.set(img);
    document.body.style.overflow = 'hidden';
  }

  closeImage() {
    this.selectedImage.set(null);
    document.body.style.overflow = '';
  }
}