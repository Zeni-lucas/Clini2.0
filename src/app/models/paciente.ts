import { Endereco } from "./endereco";

export class Paciente {
    
    id!: number;

    nome!: string;
    cpf!: string;
    dataDeNascimento!: Date;
    telefone!: string;

    endereco!: Endereco;

    constructor(id: number, nome: string, cpf: string, dataDeNascimento: Date, telefone: string, endereco: Endereco){
      if(id>0)this.id
      this.nome = nome;
      this.cpf = cpf;
      this.dataDeNascimento = dataDeNascimento;
      this.telefone = telefone;
      if (endereco)this.endereco = endereco;
    }
}
