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
    { izena: "Pepe", abizena: "Perez", generoa: "gizona", soldata: 1000, likes: 0, lanean: true, jaiotza: new Date(24/11/2023)},
    { izena: "Sara", abizena: "Ruiz", generoa: "emakumea", soldata: 1000, likes: 0, lanean: true, jaiotza: new Date(24/11/2023)},
    { izena: "Paul", abizena: "Elorza", generoa: "gizona", soldata: 1500, likes: 0, lanean: false, jaiotza: new Date(24/11/2023)},
    { izena: "Raul", abizena: "Txakartegi", generoa: "gizona", soldata: 2000, likes: 0, lanean: false, jaiotza: new Date(24/11/2023)}
    ];

    gehituLikes(langilea: any){ 
      langilea.likes++; 
    }
    myText = "Nire izena: Markel da";

    rowStart = 0;
    rowLimit = 2;
    kenduRow() {
    this.rowStart -= 2;
    this.rowLimit -= 2;
    }
    gehituRow() {
    this.rowStart += 2;
    this.rowLimit += 2;
}

}
