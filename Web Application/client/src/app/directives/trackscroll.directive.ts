import {Directive, HostListener, Output, EventEmitter, ElementRef} from "@angular/core";

@Directive({
  selector : '[tracking-scroll]'
})

export class TrackScrollDirective {
  @Output() scrolled = new EventEmitter;

  @HostListener('window:scroll') onScroll(event : Event) {
    this.scrolled.emit({value : event});
	};
}
