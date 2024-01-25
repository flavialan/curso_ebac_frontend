let alunos = [
    {
        'nome': 'Flavia',
        'nota': 10
    },
    {
        'nome': 'Yann',
        'nota': 8
    },
    {
        'nome': 'Bruna',
        'nota': 5
    },
    {
        'nome': 'Yuri',
        'nota': 6
    },
    {
        'nome': 'Sandra',
        'nota': 7
    }
]

const alunosAprovados = alunos.filter((elemento) => {
    return elemento.nota >= 6;
})

console.log(alunos);
console.log(alunosAprovados);


