import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GenderizeService } from 'src/app/services/api/genderize.service';

@Component({
  selector: 'app-gender',
  templateUrl: './gender.component.html',
  styleUrls: ['./gender.component.css']
})
export class GenderComponent {
  valor :string = "";
  respuesta:any;
  display :boolean = false;
  constructor(private service: GenderizeService) {}

  buscar() {
    if(this.valor === ""){
      this.display = false;
    }else {
      this.service.genderize(this.valor).subscribe((x) => {
        this.respuesta = x;
        this.display = true;
      })
    }
  }

}
