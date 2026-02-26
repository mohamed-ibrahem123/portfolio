import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
    selector: '[appScrollAnimate]',
    standalone: true
})
export class ScrollAnimateDirective implements OnInit {

    constructor(private el: ElementRef) { }

    ngOnInit() {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.el.nativeElement.classList.add('show');
                    observer.unobserve(this.el.nativeElement); // يحصل مرة واحدة
                }
            });
        }, { threshold: 0.2 });

        observer.observe(this.el.nativeElement);
    }
}
