import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie';
import { SerieService } from '../serie.service';

@Component({
  selector: 'app-serie-listar',
  templateUrl: './serie-listar.component.html',
  styleUrls: ['./serie-listar.component.css']
})
export class SerieListarComponent implements OnInit {

  constructor(private serieService: SerieService) { }
  series: Array<Serie> = [];

  getSeries(): void{
    this.serieService.getSeries().subscribe(series=>{
      this.series=series;
    });
  }
  ngOnInit() {
    this.getSeries()
  }

}
