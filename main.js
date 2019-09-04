// REST

const usuario = {
    nome: 'Diego',
    idade: 23,
    empresa: 'RocketSeat'
};

const { nome, ... resto } = usuario;

console.log(nome);

console.log(resto); 