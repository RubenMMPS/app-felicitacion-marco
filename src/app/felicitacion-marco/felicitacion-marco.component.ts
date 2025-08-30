import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // 🔴 Importa esto

@Component({
  selector: 'app-felicitacion-marco',
  imports: [CommonModule],
  templateUrl: './felicitacion-marco.component.html',
  styleUrl: './felicitacion-marco.component.css',
})
export class FelicitacionMarcoComponent {
  contadorPag: number = 0;
}
