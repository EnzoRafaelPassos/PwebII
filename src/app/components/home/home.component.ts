import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nomeProduto: string = 'Curso de Angular';
  anuncio: string = `O ${ this.nomeProduto } está em promoção`;
  idProduto: number = 123;
  precoProduto: number = 2.59;
  promocao: boolean = true;
  foto: string = 'assets/img/crud.png'

  constructor() {
      console.log('Nome do Produto: ',this.nomeProduto);
      console.log('Nome do Produto: ',this.anuncio);
      console.log('Nome do Produto: ',this.idProduto);
      console.log('Nome do Produto: ',this.precoProduto);
      console.log('Nome do Produto: ',this.promocao);


    }

  ngOnInit(): void {
  }

}
