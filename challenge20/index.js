(function (window, document) {
    'use strict'
    /*
1. Envolva todo o conteúdo desse desafio em uma IIFE.
2. Adicione a diretiva 'use strict';
3. Passe por parâmetro para a IIFE os objetos window e document.
4. Dessa vez não é necessário criar um HTML. Ele já existe, e vamos utilizar
a marcação criada nele para fazer nosso desafio ;)
O HTML NÃO PODE ser alterado!
*/


    /*
    Ao carregar a página, pergunte ao usuário "Qual o seu nome?". Atribua o
    resultado à uma variável chamada `username`. Se o usuário não digitar um
    nome, `username` deve receber "Desconhecido".
    Com a resposta, mostre um alert com a mensagem "Bem vindo [USERNAME]!"
    */

    var username = prompt('Qual é o seu nome ❓');
    if (!username) {
        username = " Desconhecido";
    }
    alert("Bem vindo sr(a)✌🏿 " + username + " !😁")

    /*
    Agora, pergunte ao usuário "Qual o seu e-mail?", atribuindo o resultado à
    uma variável chamada `email`.
    */
    var email = prompt(username + ', Qual é o seu email ♥ ?');

    /*
    - Selecione o input de "Nome", atribuindo-o à uma variável chamada
    `$inputUsername`.
    */
    var $inputUsername = document.querySelector('inupt[type="text"]');


    /*
    - Selecione o input de "Email", atribuindo-o à uma variável chamada
    `$inputEmail`.
    */
    var $inputEmail = document.querySelector('inupt[type="email"]');


    /*
    - Selecione o campo de "Mensagem", atribuindo-o à uma variável chamada
    `$message`.
    */
    var $message = document.querySelector('textarea');


    /*
    - Selecione o botão de envio do formulário, atribuindo-o à uma variável
    chamada `$button`.
    */
    var $button = document.querySelector('button');


    /*
    Preencha os campos de "Nome" e "Email" que estão no documento com os valores
    entrados pelo usuário.
*/
    $inputUsername.value = username;
    $inputEmail.value = email;

    /*
    Adicione um listener de evento de click ao botão que faça o seguinte:
    1. Verificar se todos os campos estão preenchidos:
    - Mostrar um alert para cada campo não preenchido, como abaixo:
    - Se o campo de "Nome" não estiver preenchido, mostrar:
        - "Preencha o nome do usuário!"
    - Se o campo de "Email" não estiver preenchido, mostrar:
        - "Preencha o e-mail!"
    - Se o campo de "Mensagem" não estiver preenchido, mostrar:
        - "Preencha a mensagem!"
    - Se o campo de "Email" for inválido, mostrar:
        - "Entre com um e-mail válido!"
    2. Para verificar se o e-mail é válido use a função `isValidEmail`, passando
    o e-mail que foi entrado no campo de "Email" por parâmetro. (A função
    `isValidEmail` será criada logo abaixo).
    3. Se tudo estiver OK, pergunte ao usuário:
        - "Tem certeza que deseja enviar o formulário?"
    Se for confirmado, mostre um alerta com a mensagem:
        - "Enviado com sucesso!"
    Caso contrário, mostre um alerta com a mensagem:
        - "Não enviado."
    */

    $button.addEventListener(click, function (event) {
        if (!inputUsername.value) {
            return alert("Preencha o nome do usuário!")
        }
        if (!$email.value) {
            return alert("Preencha o e-mail!")
        }
        if (!message) {
            return alert("Preencha a mensagem")
        }
        if (!isValideEmail($inputEmail)) {
            return alert("Entre com um e-mail válido! ")
        }

        if (!confirm("Tem certeza que deseja enviar o formulário?"))

            return alert('Não enviado.')


        return alert('Enviado com sucesso.')



    }, false);

    /*
    Crie uma função chamada `isValidEmail`, que será usada na validação do
    envio do formulário.
    Essa função deve receber o e-mail por parâmetro e verificar se é um e-mail
    válido.
    As regras para validação são:
        - O nome do usuário (antes do arroba), pode ser qualquer caractere
        alfanumérico, incluindo o underscore, sinal de "+" e o ponto;
        - Após o arroba, o domínio pode conter somente caracteres alfanuméricos
        e o underscore;
        - Para a extensão, o domínio deve vir seguido de um ponto, e no mínimo
        2 caracteres alfanuméricos;
        - O final do domínio é opcional, mas se existir, deve começar com um
        ponto, seguido de no máximo 2 caracteres alfanuméricos.
    Alguns e-mails válidos que podem ser usados para testar:
        - "meu.email+categoria@gmail.com"
        - "juca_malandro@bol.com.br"
        - "pedrobala@hotmail.uy"
        - "sandro@culinaria.dahora"
    Alguns e-mails inválidos:
        - "walter-da-silva@maraca.br"
        - "rita-marica@titica.a.b"
        - "agua_@evida.br.com"
    */
    function isValidEmail(email) {
        var regex = /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/;
        return regex.test(email);
    }
})(window, document);
