import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.css']
})
export class ListarProdutosComponent implements OnInit {

  listaStrings: string[] =['Primeiro', ' Sgeundo', 'Terceiro'];
  listaNumeros : number [] = [15, 15.18,100];

    objetoModelo = {
      nome: "Enzo",
      idade: 18,
      altura: 1.78,
      graduado:false
    };

    listaProdutos : any[] = [
        {nome: "Curso de Angular", precoProduto: 35.50, validade: '2021-05-03', Id:1},
        {nome: "Curso de PHP", precoProduto: 50, validade: '2021-05-08', Id:2},
        {Id:3, nome: "Curso de Python", precoProduto: 90, validade: '2021-07-08' }
    ];

  constructor() {
    for (let item of this.listaStrings) {
    console.log(item);
    }

    for(const item of this.listaNumeros) {
      console.log(item);
    }

    console.log(this.objetoModelo);
    console.log(this.objetoModelo.nome);



  }

  ngOnInit(): void {
  }

}
