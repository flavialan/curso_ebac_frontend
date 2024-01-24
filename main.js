function Pessoa (nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}

function Aluno (nome, sobrenome, curso, mensalidade){
    Pessoa.call(this, nome, sobrenome);
    this.curso = curso;

    let _mensalidade = mensalidade;

    this.getMensalidade = function(){
        return `${nome} ${sobrenome} esta cursando ${curso} com mensalidade de ${mensalidade}`
    }

    this.setMensalidade = function(mensalidade){
        _mensalidade = mensalidade;
    }
}

function EngenhariaCivil (nome, sobrenome){
    Aluno.call(this, nome, sobrenome, "Engenahria Civil", 2000);
}

function Arquitetura (nome, sobrenome){
    Aluno.call(this, nome, sobrenome, "Arquitetura e Urbanismo", 1900);
}

function Computacao (nome, sobrenome){
    Aluno.call(this, nome, sobrenome, "Ciencias da Computacao", 1300);
}

const aluno1 = new EngenhariaCivil("Flavia", "Lopes");
const aluno2 = new Arquitetura("Yann", "Andrade");
const aluno3 = new Computacao("Bruna", "Lopes");

console.log(aluno1.getMensalidade());
console.log(aluno2.getMensalidade());
console.log(aluno3.getMensalidade());