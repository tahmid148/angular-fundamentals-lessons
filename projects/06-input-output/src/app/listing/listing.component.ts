import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Car } from '../car';

@Component({
  selector: 'app-listing',
  standalone: true,
  imports: [CommonModule],
  template: ` <!-- This article element represents and entire listing -->
    <article class="listing">
      <div class="image-parent">
        <img class="product-image" src="https://placehold.co/100x100" />
      </div>
      <section class="details">
        <p class="title">{{ car?.make }} {{ car?.model }}</p>
        <hr />
        <p class="detail">
          <span>Year</span>
          <span>{{ car?.year }}</span>
        </p>
        <div class="detail">
          <span>Transmission</span>
          <span>{{ car?.transmission }}</span>
        </div>
        <p class="detail">
          <span>Mileage</span>
          <span>{{ car?.miles }}</span>
        </p>
        <p class="detail">
          <span>Price</span>
          <span>{{ car?.price }}</span>
        </p>
      </section>
      <button (click)="saveCar()">Save</button>
    </article>
    <!-- end car listing markup -->`,
  styles: ``,
})
export class ListingComponent {
  @Input() car: Car | undefined;

  @Output() savedCar = new EventEmitter<Car>();

  saveCar(): void {
    this.savedCar.emit(this.car);
  }
}
