import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MockDataService } from '../services/mock-data.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  id: string | null;

  constructor(
    private aRoute: ActivatedRoute,
    public mockData: MockDataService
  ) {
    this.id = this.aRoute.snapshot.paramMap.get('id');
    console.log('id usuario:'+this.id);
  }

  ngOnInit(): void {
  }

}
