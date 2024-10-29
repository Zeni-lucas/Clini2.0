interface IUsuario{
    id: number;
    nome: string;
    email: string;

    getEmail: () => string;
}


export class Usuario implements IUsuario{
    
    id = 0;
    nome = "mamonha";
    email = "mamonha@gmail";

    getEmail(){
        return this.email;
    }
}

