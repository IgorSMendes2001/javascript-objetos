const cliente={
    nome:"André",
    idade:36,
    cpf:"2334555678",
    email:"andre@email.com"
}
const chaves =["nome","idade","cpf","email"];
console.log(cliente[chaves[0]]);
chaves.forEach(info=>console.log(cliente[info]));
cliente.fone="992232322";
console.log(cliente);
delete cliente.fone;
console.log(cliente);