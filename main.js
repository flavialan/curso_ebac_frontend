const form = document.getElementById('form-numeros');
const segundoNumero = document.getElementById('numero2');
const primeiroNumero = document.getElementById('numero1');
let formEvalido = false;




function validaCondicao(n1, n2){
    n1 = parseInt((primeiroNumero).value);
    n2 = parseInt((segundoNumero).value);
    return n2 > n1;
}

form.addEventListener('submit', function(e){
    e.preventDefault(); 

    const mensagemSucesso = `<b>${segundoNumero.value}</b> e maior que <b>${primeiroNumero.value}</b>. Formulário enviado com sucesso!`

    if(formEvalido){
        const containerMensagemSucesso =  document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block'; 

        primeiroNumero.value = '';
        segundoNumero.value = '';


    }else{
        segundoNumero.style.border = '1px solid red'
        document.querySelector('.error-message').style.display = 'block';
    }
})

segundoNumero.addEventListener('keyup', function(e){
    console.log(e.target.value);
    formEvalido = validaCondicao(e.target.value);

    if(!formEvalido){
        segundoNumero.classList.add('error')
        document.querySelector('.error-message').style.display = 'block';
    } else{
        segundoNumero.classList.remove('error')
        document.querySelector('.error-message').style.display = 'none';
    }
})