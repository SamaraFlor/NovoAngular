import { Component, OnInit } from '@angular/core';
import { PeopleService } from './shared/services/people.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Projeto';
  count =0;
  nome ='@Samara Flor';
  text ='';

  pessoas = [
    {
      firstName:'',
      lastName: '',
      age:0
    },
  ];


  constructor(private peopleService:PeopleService){

  }

  ngOnInit(): void {
      let intervalo = setInterval(()=>{
        this.count++;
        if (this.count ===10) {
          clearInterval(intervalo);
        }
      },1000)
      this.getPeople();
  }

    clicou(nome:string){
      console.log('clicou em mim', nome)
  }

  getPeople(){
    this.peopleService.getPeople().subscribe(people => {
      this.pessoas = people;
    })
  }
}
