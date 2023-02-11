import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-info-usuario',
  templateUrl: './info-usuario.component.html',
  styleUrls: ['./info-usuario.component.css']
})
export class InfoUsuarioComponent implements OnInit {

  id :string = '0';
  constructor(private route: ActivatedRoute){

  }

  ngOnInit(): void {
      let id = this.route.snapshot.paramMap.get('id')?.toString();
  }
}
