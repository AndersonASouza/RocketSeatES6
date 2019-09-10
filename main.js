const usuarios = [
 { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
 { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
 { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];


const empresa = {
    nome: 'Rocketseat',
    endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC',
    }
   };

class Usuario{
    constructor(email,senha){
        this.email = email;
        this.senha = senha;
        this.admin = false;
        const arr = [1, 2, 3, 4, 5];
        arr.map(item => item+10);
    }

    isAdmin() {
        return this.admin;
    }
}

class Admin extends Usuario{
    constructor(){
        super();
        this.admin = true;
    }    
}

//Ex2.1
var idades = usuarios.map(usuario => usuario.idade);

//Ex2.2
var usuariosFiltrados = usuarios.filter(usuario => {
    if (usuario.empresa==="Rocketseat"&&usuario.idade>18) {
        return true;
    } else {
        return false;
    }
});

//Ex2.3
var googleUser = usuarios.find(usuario => usuario.empresa==="Google");

//Ex2.4
var operacao = usuarios.map(user => {
    user.idade = user.idade*2
    return user;
}).filter(usersIdadeDobrada => usersIdadeDobrada.idade<=50 ? true:false);


// console.log(idadeDobrada);

const promise = () => (resolve, reject) => resolve();

const{nome, endereco:{cidade, estado}} = empresa;

console.log(nome); // Rocketseat
console.log(cidade); // Rio do Sul
console.log(estado); // SC

function mostraInfo(nome, idade) {
    return `${nome} tem ${idade} anos.`;
}

console.log(mostraInfo({ nome: 'Diego', idade: 23 })); // SC