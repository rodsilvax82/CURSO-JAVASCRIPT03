class Cliente {
    Nome;
    CPF;
}

class ContaCorrente {
    Agencia;
    Saldo;

    sacar(valor) {
        if (this.Saldo >= valor) {
            this.Saldo -= valor;
        }
    }
}






const cliente1 = new Cliente();
const conta1 = new ContaCorrente();
let valorSacado = 200;

cliente1.Nome = "Rodrigo";
cliente1.CPF = 35672009840;
conta1.Agencia = 1001;

conta1.Saldo = 0;
console.log(conta1.Saldo);
conta1.Saldo = 100;
console.log(conta1.Saldo);
conta1.Saldo = 50;
console.log(conta1.Saldo);

const cliente2 = new Cliente();
const conta2 = new ContaCorrente();
cliente2.Nome = "Tatiana";
cliente2.CPF = 15935725840;
conta2.Agencia = 1001;
conta2.Saldo = 0;

// console.log(cliente1);
// console.log(cliente2);
