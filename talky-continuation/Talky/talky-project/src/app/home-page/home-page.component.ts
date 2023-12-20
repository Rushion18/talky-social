import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})


export class HomepageComponent {

  @ViewChild('storiesContainer') storiesContainer!: ElementRef;

  currentScroll = 0;
  scrollAmount = 120;
  isFollowing = false;
  isFollowing1 = false;
  isFollowing2 = false;
  router: any;

  scrollHorizontal(val: number): void {
    this.currentScroll += val * this.scrollAmount;

    // You can set a maximum and minimum scroll value if needed
    // const maxScroll = ...;
    // const minScroll = ...;
    // this.currentScroll = Math.max(minScroll, Math.min(this.currentScroll, maxScroll));

    this.storiesContainer.nativeElement.scrollLeft = this.currentScroll;
  }

  toggleFollow(): void {
    this.isFollowing = !this.isFollowing;
  }

  toggleFollow1(): void {
    this.isFollowing1 = !this.isFollowing1;
  }


  toggleFollow2(): void {
    this.isFollowing2 = !this.isFollowing2;
  }

  goToProfilePage(): void {
    // Navigate to the profile page
    this.router.navigate(['/profile']); }

  

}


