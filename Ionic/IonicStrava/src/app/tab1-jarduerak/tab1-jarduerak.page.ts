import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location} from '@angular/common';
import { KlubaService } from '../services/kluba.service';
import { ApiService } from '../services/api.service';

import { Kluba } from '../classes/kluba';
import { Jarduera } from '../classes/jarduera';

@Component({
  selector: 'app-tab1-jarduerak',
  templateUrl: './tab1-jarduerak.page.html',
  styleUrls: ['./tab1-jarduerak.page.scss'],
})
export class Tab1JarduerakPage implements OnInit {
  kluba = {} as Kluba;
  jarduerak: Jarduera[] = [];
  constructor(private apiService: ApiService, private route: ActivatedRoute, private location: Location) { }

  //laravel api
  /*
  constructor(private klubaService: KlubaService, private route: ActivatedRoute, private location: Location) { }

  
  
  getKluba(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.klubaService.getKluba(id)
    .subscribe(kluba => {
    this.kluba = kluba;
    this.kluba.jarduerak.sort( (a, b): number => {
    return (b.moving_time - a.moving_time);
    });
    },
    error => console.log('Error :: ' + error));
   }
   goBack(): void {
    this.location.back();
   }
  */
   //sqlite
   getKluba(): void {
    this.apiService.dbState().subscribe((res) => {
      if(res){
            const id = Number(this.route.snapshot.paramMap.get('id'));
            this.apiService.fetchKluba(id).subscribe(kluba => {
              this.kluba = kluba;
              this.kluba.jarduerak.sort( (a, b): number => {
              return (b.moving_time - a.moving_time);
              });
            }
        )}
    });
  }
  getJarduerak(): void{
    this.apiService.dbState().subscribe((res) => {
      if(res){
        this.apiService.fetchJarduerak().subscribe(
          data => {this.jarduerak = data;
          }
          
        )
      }
     });
  }
  deleteJarduera(id: any): void{
    this.apiService.dbState().subscribe((res) => {
      if(res){
        
        this.apiService.deleteJarduera(id);
      }
    });
  }
  ngOnInit(): void {
    this.getKluba();
    
  }

}
