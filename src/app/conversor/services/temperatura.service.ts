import { Injectable } from '@angular/core';
import { ITemperatura, IConversao } from '../models';

@Injectable(
//   {
//   providedIn: 'root'
// }
)

export class TemperaturaService {

  public temperatura : ITemperatura;

  public tipoConversao: string;

  converter(conversao: IConversao): number{
    this.tipoConversao = conversao.tipo
    let result: number;
    switch(this.tipoConversao) {
      case 'celsius-fahrenheit':
        result = conversao.valor * 1.8 + 32
        break
      case 'celsius-kelvin':
        result = conversao.valor + 273
        break
      case 'fahrenheit-celsius':
        result = (conversao.valor - 32) / 1.8
        break
      case 'fahrenheit-kelvin':
        result = (conversao.valor - 32) *  5 / 9 + 273
        break
      case 'kelvin-celsius':
        result = conversao.valor - 273
        break
      case 'kelvin-fahrenheit':
        result = (conversao.valor - 273) * 1.8 + 32
        break
      default:
        result = conversao.valor
        break
    }

    return result
  }

  constructor() { }

  
}
