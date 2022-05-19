import { Component, OnInit } from '@angular/core';
import { Banda } from '../Banda';
import { BandaService } from '../banda.service';
import { Banda_detail } from '../banda_detail';
import { BandaDetailComponent } from './banda-detail/banda-detail.component';


@Component({
  selector: 'app-banda-list',
  templateUrl: './banda-list.component.html',
  styleUrls: ['./banda-list.component.css']
})
export class BandaListComponent implements OnInit {

  bandas: Array<Banda> =[];
  promedio: number =0;
  selected: Boolean = false;
  selectedBanda!: Banda_detail;

  constructor(private bandaService: BandaService) { }

  getBandas(): void {
    var suma=0;
    this.bandaService.getBandas().subscribe((bandas) => {
      this.bandas = bandas;
      bandas.forEach(function (banda) { return suma = suma + banda.numberOfMembers; });
      this.promedio = Math.round(suma / bandas.length);
    });
  }

  onSelected(banda: Banda_detail): void {
    this.selected = true;
    this.selectedBanda = banda;
  }

  ngOnInit(): void {
    this.getBandas();
  }

}
