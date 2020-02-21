import { Component } from '@angular/core';
import { DadosService } from '../servicos/dados.service';

export interface IPokemon{
  numero: string;
  nome: string;
  tipos: string[];
  img: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public listaPokemons = [
      {numero: '001', nome:'Bulbasaur', tipos:['Grass', 'Poison'], img:'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png'},
      {numero: '004', nome:'Charmander', tipos:['Fire'], img:'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png'},
      {numero: '007', nome:'Squirtle', tipos:['Water'], img:'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png'},
      {numero: '025', nome:'Pikachu', tipos:['Eletric'], img:'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png'},
      {numero: '382', nome:'Kyogre', tipos:['Water'], img:'https://assets.pokemon.com/assets/cms2/img/pokedex/full/382.png'},
      {numero: '282', nome:'Gardevoir', tipos:['Psychic', 'Fairy'], img:'https://assets.pokemon.com/assets/cms2/img/pokedex/full/282.png'},
      {numero: '778', nome:'Mimikyu', tipos:['Ghost', 'Fairy'], img:'https://assets.pokemon.com/assets/cms2/img/pokedex/full/778.png'},
      {numero: '093', nome:'Haunter', tipos:['Ghost', 'Poison'], img:'https://assets.pokemon.com/assets/cms2/img/pokedex/full/093.png'},
      {numero: '172', nome:'Pichu', tipos:['Eletric'], img:'https://assets.pokemon.com/assets/cms2/img/pokedex/full/172.png'},
      {numero: '151', nome:'Mew', tipos:['Psychic'], img:'https://assets.pokemon.com/assets/cms2/img/pokedex/full/151.png'},

  ];


  public listaFiltrada = [];

  constructor(dadosService: DadosService) {

    this.resetarLista();
  }

  abrirDadosPokemon(pokemon: IPokemon){
    console.log(pokemon);
  }
  private resetarLista(){
  this.listaFiltrada = this.listaPokemons;
}

public buscarPokemon(evento: any)
{
  let busca = evento.target.value;
  this.resetarLista();
  
  if(busca && busca.trim() !=''){
    this.listaFiltrada = this.listaFiltrada.filter(dados => {
      if(dados.nome.toLowerCase().indexOf(busca.toLowerCase()) > -1){
        return true;
      }
      if(dados.numero.toLowerCase().indexOf(busca.toLowerCase()) > -1){
        return true;}


      return false;


    });
  }
}



}
