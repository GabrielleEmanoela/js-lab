/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var qlqer = [2, 5, 8, 6, 2, { a: 1 }, function () { }];


/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
//
//Função Literal.
function txt(array) {

    return array;
}


/*
Imprima o segundo índice do array retornado pela função criada acima.
*/

console.log(myFunction2(myarray2) [1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function name(array, number) {

    return array[number];
}


/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var myarray2 = ['Ninja', 52.4, true, [1, 2, 'Daciuk'], { b: 2 }];


/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(myFunction2(myarray2, 0));
console.log(myFunction2(myarray2, 1));
console.log(myFunction2(myarray2, 2));
console.log(myFunction2(myarray2, 3));
console.log(myFunction2(myarray2, 4));
/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro.
 Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/


function books(livro) {
    var txt = {

        "Diario da manha": {
            qtdd: 10,
            autor: "Amazonas",
            editora: "ZECA"
        },
        "Abacaxi": {
            qtdd: 50,
            autor: "Izabela",
            editora: "Enois"
        },

    }
    return !livro ? txr : txt[livro]

}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(books(livro));

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var txt = "Diario da manha";
console.log('O livro ' + livro + ' tem ' + books(livro).qtdd + ' páginas!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
// ?
console.log('O autor do livro  ' + livro + ' é ' + books(livro).autor + '.');

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."*/
console.log('O livro ' + livro + ' foi publicado pela editora ' + books(livro).editora)
