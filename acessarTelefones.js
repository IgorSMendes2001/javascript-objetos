const cliente={
    nome:"André",
    idade:36,
    cpf:"2334555678",
    email:"andre@email.com",
    fones:["55999211124","2234447565"]
}
console.log(cliente.fones[0]);
cliente.fones.forEach(fone=>console.log(fone));
cliente.dependentes={
    nome:"Sara",
    parentesco:"filha",
    dataNascimento:"22/02/2019"
}
console.log(cliente)