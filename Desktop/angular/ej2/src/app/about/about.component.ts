import { Component, OnInit } from '@angular/core';
import{ActivatedRoute} from '@angular/router'; //xq quiero obtener los parametros de una url
import{Router} from '@angular/router'; //si quiero que este componente a su vez me dirija a otros lados.
import{DataService} from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  goals:any;

  //esto es lo que llamo inyecccion de dependencia(relacionado para obtener valor de url),cuando importo router tengo que crear otra inyecccion de dependencia
  constructor(private route:ActivatedRoute,private router:Router,private _data:DataService) {
    //tomo el response, e imprimo el nombre que defini id(esta definido en routing module)
    this.route.params.subscribe(res=>console.log(res.id));
  }

  ngOnInit() {
    this._data.goal.subscribe(res=>this.goals=res);
  }

  sendMeHome(){
    this.router.navigate(['']);
  }

}
