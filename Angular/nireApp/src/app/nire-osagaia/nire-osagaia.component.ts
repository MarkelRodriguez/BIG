import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nire-osagaia',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './nire-osagaia.component.html',
  styleUrl: './nire-osagaia.component.css'
})
export class NireOsagaiaComponent {

  Title="Langileen zerrenda";
  getTitle() {
    return this.Title;
  }
  
  langileak = [
    { izena: "Pepe", abizena: "Perez", generoa: "gizona", soldata: 1000, likes: 0, lanean: true},
    { izena: "Sara", abizena: "Ruiz", generoa: "emakumea", soldata: 1000, likes: 0, lanean: true},
    { izena: "Paul", abizena: "Elorza", generoa: "gizona", soldata: 1500, likes: 0, lanean: false},
    { izena: "Raul", abizena: "Txakartegi", generoa: "gizona", soldata: 2000, likes: 0, lanean: false}
    ];

    gehituLikes(langilea: any){ 
      langilea.likes++; 
    }
}
