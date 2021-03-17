(function () {


    /*
    Envolva todo o conteúdo desse arquivo em uma IIFE.
    */

    /*
    Crie um objeto chamado `person`, com as propriedades:
        `name`: String
        `lastname`: String
        `age`: Number
    Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
    de valor para cada propriedade.
    */


    person = {
        nome: "Gabrielle",
        lastname: "Emanoela",
        age: 50
    }
    // 
    console.log('Propriedades de "person":');

    /*
    Mostre no console, em um array, todas as propriedades do objeto acima.
    Não use nenhuma estrutura de repetição, nem crie o array manualmente.
    */

    console.log([person]);
    /*
    Crie um array vazio chamado `books`.
    */
    books = [];

    /*
    Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
    seguintes propriedades:
    `name`: String
    `pages`: Number
    */

    books.push([{ nome: 'a', pages: 10 }]);
    books.push([{ nome: 'b', pages: 10 }]);
    books.push([{ nome: 'c', pages: 10 }]);
    books.push([{ nome: 'd', pages: 10 }]);


    /*
    Mostre no console todos os livros.
    */
    console.log(books[0]);
    console.log(books[1]);
    console.log(books[2]);
    console.log(books[3]);

    console.log('\n Livro que está sendo removido:');
    /*
    Remova o último livro, e mostre-o no console.
    */
    books.pop(3)
    console.log('\nAgora sobraram somente os livros:');
    /*
    Mostre no console os livros restantes.
    */
    console.log(books);

    /*
    Converta os objetos que ficaram em `books` para strings.
    */
    JSON.stringify(books);
    console.log('\nLivros em formato string:');

    /*
    Mostre os livros nesse formato no console:
    */

    console.log(books);

    /*
    Converta os livros novamente para objeto.
    */
    JSON.parse(books)
    console.log('\nAgora os livros são objetos novamente:');

    /*
    Mostre no console todas as propriedades e valores de todos os livros,
    no formato abaixo:
        "[PROPRIEDADE]: [VALOR]"
    */
    for (var i = 0; i < books.length; i++) {
        for (var prop in books[i]) {
            console.log(prop + ': ' + books[i][prop]);
        }
    }
    /*
    Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
    seu nome. Adicione seu nome completo no array.
    */
    var myname = ["G", "A", "B", "I"];
    console.log('\nMeu nome é:');

    /*
    Juntando todos os itens do array, mostre no console seu nome.
    */
    myname.join(",")
    myname.join("")
    console.log(myname.join(""));

    console.log('\nMeu nome invertido é:');

    /*
    Ainda usando o objeto acima, mostre no console seu nome invertido.
    */
    console.log(myname.reverse());


    console.log('\nAgora em ordem alfabética:');
    /*
    Mostre todos os itens do array acima, odenados alfabéticamente.
    */
    myname.sort();
    console.log(myname);
})();