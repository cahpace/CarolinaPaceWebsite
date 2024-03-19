const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const lastNameInput = document.querySelector("#lastName");
const emailInput = document.querySelector("#email");
const messageTextarea = document.querySelector("#textarea");

form.addEventListener("submit", (event) =>{
    event.preventDefault();
    //validações
    //varifica se nome está vazio
    if(nameInput.value === ""){
        alert("Por favor, preencha seu nome");
        return;
    }
    //verifica se sobrenome está vazio
    if(lastNameInput.value === ""){
        alert("Por favor, preencha seu sobrenome");
        return;
    }
    //veririca se email está preenchido e se é válido
    if(emailInput === "" || !isMailValid(emailInput.value)){
        alert("Por favor, preencha seu email");
        return;
    }
    //verifica se a mensagem está vazia
    if(messageTextarea.value === ""){
        alert("Escreva sua mensagem");
        return;
    }

    // se todos os campos estiverem corretamente preenchidos, envie o form
    form.submit();
})

//funtion email validation
function isMailValid(email){

    //cria uma regex para validar email
    const emailRegex = new RegExp(
        //ex usuario12@host.com.dominio  
        //primeiro precisa verificar se a primeira parte (antes do @) possui letras e numeros (nessa primeira parte do email são aceitos letra de a-z minusculo, de A-Z maiusculo, de 0-9 e caracteres . _ -)
        //a parte do host tambem aceita mesmas coisas que antes do @ (partes do email separadas pelo +)
        //parte com o dominio só letras (com, br, net etc). Coloca {2} porque pode aparecer duass vezes essa parte, como é o caso de .com.br
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-z]{2,}$/
    );
    if(emailRegex.test(email)){
        return true;
    }
    return false;
}