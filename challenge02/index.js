
// 1- Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function name(y, z) {
    return y + z;
}

//2- Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var txt = name(5, 10) + 5;

// 3- Qual o valor atualizado dessa variável?
//R = 20

// 4- Declare uma nova variável, sem valor.
var tst;

/*
 5- Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function name2() {
    tst = 1;
    return "O valor da variável agora é " + tst;

}


//6- Invoque a função criada acima.
name2();

//7- Qual o retorno da função? (Use comentários de bloco).

// R= 'O valor da variável agora é 1'

/*
8- Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function name3(x, y, z) {

    if (x === null || y === null || z === null) {
        var rs = "Preencha todos os valores corretamente";
        return rs;
    }
    return (x * y * z) + 2;


}


// 9- Invoque a função criada acima, passando só dois números como argumento.
name3(9, 4);

// 10- Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).

//R = 'Preencha todos os valores corretamente'

// 11- Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
name3(5, 9, 10);

// 12- Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// R = 452

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function teste(x, y, z) {

    if (x !== undefined && y === undefined && z === undefined) {
        return x;
    }
    if (y !== undefined && z === undefined) {
        return x + y;
    }
    if (z !== undefined) {
        return (x + y) / z;
    }
    if (x === undefined && y === undefined && z === undefined) {
        return false;
    }
    return null;
}



// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
teste(1);
//R = 1;
teste(1, 2);
//R = 3;
teste(2, 3, 6);
// R = 0.8333333333333334
teste();
//R = False