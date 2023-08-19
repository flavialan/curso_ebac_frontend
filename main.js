$(document).ready(function(){

    $('#telefone').mask('(00) 00000-0000');
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000');

    $('form').validate({
        rules: {
            nome: {
                required: true,
                minlength: 10,
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true,
                minlength: 11
            },
            endereco: {
                required: true
            },
            cep:{
                required: true,
                minlength:9
                
            },
        },
        messages:{
            nome:{
                required: "Campo obrigatório!",
                minlength: "Insira o nome completo"
            },
            email:{
                required: "Campo obrigatório!"
            },
            telefone:{
                required: "Campo obrigatório!"
            },
            cpf:{
                required: "Campo obrigatório!",
                minlength: "CPF inválido!"
            },
            endereco:{
                required: "Campo obrigatório!"
            },
            cep:{
                required: "Campo obrigatório!",
                minlength: "CEP inválido!"
            }
        },
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids();
            if(camposIncorretos){
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })
})