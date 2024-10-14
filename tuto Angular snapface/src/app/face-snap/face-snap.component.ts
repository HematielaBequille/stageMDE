import { Component, OnInit, Input } from '@angular/core';
import { NgStyle, NgClass } from '@angular/common';
import { FaceSnap } from '../models/face-snap';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [
    NgStyle,
    NgClass
  ],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss',
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;
  snapButtonText!: string;
  userHasSnapped!: boolean;

  // Pour initialiser ces propriétés en suivant les best practices Angular on utilise l'interface OnInit
  // La méthode  ngOnInit()  est appelée automatiquement par Angular au moment de la création de chaque instance du component. Elle permet notamment d'initialiser des propriétés.
  ngOnInit(): void {
    this.snapButtonText = 'Oh Snap!';
    this.userHasSnapped = false;
    
  }

  onSnap(): void {
    if (this.userHasSnapped) {
      this.faceSnap.removeSnap();
      this.snapButtonText = "Oh Snap!";
      this.userHasSnapped = false;
    } else {
      this.faceSnap.addSnap();
      this.snapButtonText = 'Oops, unSnap!';
      this.userHasSnapped = true;
    }
  }
}
