import { Component, OnInit } from '@angular/core';
import { Fiore } from '../fiore.model';
import { environment } from '../../environments/environment'
import { Observable } from 'rxjs';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { GiardinoService} from '../giardino.service';

@Component({
  selector: 'app-fiore',
  templateUrl: './fiore.component.html',
  styleUrls: ['./fiore.component.css']
})
export class FioreComponent implements OnInit {

  routeObs: Observable<ParamMap>;
  giardinoServiceObs: Observable<Object>;
  fiore: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: GiardinoService) {}

  ngOnInit(): void {

    this.routeObs = this.route.paramMap;
    this.routeObs.subscribe(this.getRouterParam);
  }

  getRouterParam = (params: ParamMap) =>
  {
    let fioreId = params.get('ID');
    console.log (fioreId);

    this.giardinoServiceObs = this.service.getFiore(fioreId);
    this.giardinoServiceObs.subscribe((data)=>this.fiore = data)

  }

}
