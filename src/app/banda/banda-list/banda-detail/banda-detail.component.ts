import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BandaService } from '../../banda.service';
import { Banda_detail } from '../../banda_detail';

@Component({
  selector: 'app-banda-detail',
  templateUrl: './banda-detail.component.html',
  styleUrls: ['./banda-detail.component.css']
})
export class BandaDetailComponent implements OnInit {

  bandaId!: string;
  @Input() bandaDetail!: Banda_detail;
  constructor(
    private route: ActivatedRoute,
    private bandaService: BandaService) { }

    getBanda(){
      this.bandaService.getBandas().subscribe(bandas=>{
        bandas.forEach(laBanda=> {if(laBanda.id.toString() === this.bandaId){
          this.bandaDetail = laBanda;
        }}

      )
    }
    )
  }

    ngOnInit() {
      if(this.bandaDetail === undefined){
        this.bandaId = this.route.snapshot.paramMap.get('id')!
        if(this.bandaId){
          this.getBanda();
        }
      }
    }

}
