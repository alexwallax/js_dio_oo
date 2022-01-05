/*
1 - Crie a classe ContaBancaria, que possui os parâmetros agencia, numero, tipo e saldo;
2 - Dentro de ContaBancaria, construa o getter e o setter de saldo;
3 - Dentro de ContaBancaria, crie os métodos sacar e depositar;
4 - Crie uma classe-filha chamada ContaCorrente que herda todos esses parâmetros e ainda possua o parâmetro cartaoCredito;
5 - Ainda em ContaCorrente, construa o getter e o setter de cartaoCredito;
6 - Ainda em ContaCorrente, faça com que o tipo seja 'conta corrente' por padrão;
7 - Crie uma classe-filha chamada ContaPoupanca que herda todos os parâmetros de ContaBancaria;
8 - Crie uma classe-filha chamada ContaUniversitaria que herda todos os parâmetros de ContaBancaria;
9 - Faça com que o método saque de ContaUniversitaria apenas seja capaz de sacar valores menores que 500 reais.
*/

class ContaBancaria {
    constructor(agencia, numero, tipo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0; // sempre que um valor tiver get e set colocar um '_' na frente
    }

    get saldo() {
        return this._saldo;
    }

    set saldo(valor) {
        this._saldo = valor;
    }

    // método sacar
    sacar(valor) {
        if(valor > this._saldo) {
            return "Operação negada";
        }
        this._saldo = this._saldo - valor;

        return this._saldo;
    }

    // método depositar
    depositar(valor) {
        this._saldo = this._saldo + valor;

        return this._saldo;
    }

}

// criando class contaCorrente
class ContaCorrente extends ContaBancaria{
    constructor(agencia, numero, cartaoCredito){
        super(agencia, numero);
        this.tipo = 'corrente';
        this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito() {
        return this._cartaoCredito;
    }

    set cartaoCredito(valor) {
        this._cartaoCredito = valor;
    }

}

// criando class contaPoupanca
class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'poupança';
    }

}

// criando class contaUniversitária
class contaUniversitaria extends ContaBancaria {
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'universitária';
    }

    sacar(valor) {
        if(valor > 500) {
            return "Operação negada!";
        }

        this._saldo  = this._saldo - valor;
    }
    
}


// instançiar conta corrente tem (agência, número, cartão) -> (1, 234, true)
const minhaConta = new ContaCorrente(1, 234, true);

console.log(minhaConta.saldo);

minhaConta.depositar(1000);

console.log(minhaConta.saldo);

minhaConta.sacar(500);

console.log(minhaConta.saldo);

minhaConta.sacar(600);

console.log(minhaConta.saldo);


// instânciar conta poupança tem (agência e número)
const contaPoup = new ContaPoupanca(1, 22);

// instânciar conta Unuversitária tem (agência e número)
const contaUni = new contaUniversitaria(2, 23);
contaUni.depositar(1000);

console.log("Conta Uni " + contaUni.saldo);

contaUni.sacar(550);
console.log(contaUni.saldo);