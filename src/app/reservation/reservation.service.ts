import { Injectable, OnInit } from '@angular/core';
import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  // ngOnInit(): void {
  //   // throw new Error('Method not implemented.');
  //   let reservations = localStorage.getItem('reservations');
  // }

  private reservations: Reservation[] = [];

  constructor() {
    let savedReservations = localStorage.getItem('reservations');
    this.reservations = savedReservations ? JSON.parse(savedReservations) : [];
  }

  // GET all reservations
  getReservations(): Reservation[] {
    return this.reservations;
  }

  // GET a reservation
  getReservation(id: string): Reservation | undefined {
    return this.reservations.find((reservation) => reservation.id === id);
  }

  // POST a reservation
  addReservation(reservation: Reservation): void {
    reservation.id = Date.now().toString();
    this.reservations.push(reservation);
    // console.log(this.reservations);
    localStorage.setItem('reservations', JSON.stringify(this.reservations));
  }

  // PUT a reservation
  updateReservation(id: string, updatedReservation: Reservation): void {
    let index = this.reservations.findIndex((res) => res.id === id);
    this.reservations[index] = { ...updatedReservation, id: id };
    localStorage.setItem('reservations', JSON.stringify(this.reservations));
  }

  // DELETE a reservation
  deleteReservation(id: string): void {
    let index = this.reservations.findIndex((res) => res.id === id);
    this.reservations.splice(index, 1);
    localStorage.setItem('reservations', JSON.stringify(this.reservations));
  }
}
