import { Component, OnInit } from '@angular/core';

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
      nome:'Samara',
      sobrenome:'flor'
    },
    {
      nome:'Fatima',
      sobrenome:'Romero'
    },
    {
      nome:'Luiza',
      sobrenome:'Mel'
    }
  ];

  constructor(){

  }

  ngOnInit(): void {
      let intervalo = setInterval(()=>{
        this.count++;
        if (this.count ===10) {
          clearInterval(intervalo);
        }
      },1000)
  }

    clicou(nome:string){
      console.log('clicou em mim', nome)
  }
}
