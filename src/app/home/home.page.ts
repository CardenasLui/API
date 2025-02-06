import { Component } from '@angular/core';
import { ChuckService } from '../joke.service';
import { CategoriasService } from '../categorias.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  norris: any;
  categorias: any = [];

  constructor(private ChuckService: ChuckService, private CategoriasService: CategoriasService) {
  }

  ngOnInit() {
    this.ChuckService.getImageOfTheDay().subscribe((data) => {
      this.norris = data;
    });

    this.CategoriasService.getlist().subscribe((data) => { this.categorias = data, console.log(data.results) });
  }
}
