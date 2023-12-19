import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})


export class HomepageComponent {

  @ViewChild('storiesContainer') storiesContainer!: ElementRef;

  currentScroll = 0;
  scrollAmount = 120;

  scrollHorizontal(val: number): void {
    this.currentScroll += val * this.scrollAmount;

    // You can set a maximum and minimum scroll value if needed
    // const maxScroll = ...;
    // const minScroll = ...;
    // this.currentScroll = Math.max(minScroll, Math.min(this.currentScroll, maxScroll));

    this.storiesContainer.nativeElement.scrollLeft = this.currentScroll;
  }
}


