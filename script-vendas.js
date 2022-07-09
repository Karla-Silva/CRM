var i=0;
clientes=[];

function pesquisaCEP(){
    let cep=document.getElementById("cep").value;
    let url = `https://viacep.com.br/ws/${cep}/json/`;
    fetch(url)
    .then(response => response.json())
    .then(dados => {
      document.getElementById("endereco").value = dados.logradouro;
      document.getElementById("uf").value = dados.uf;
      document.getElementById("cidade").value = dados.localidade;
      document.getElementById("bairro").value = dados.bairro; 
      document.getElementById("nr_end").focus();
  })
}

function maisinfo(index){
    alert(`Nome: ${clientes[index].Nome}
Email: ${clientes[index].Email}
Telefone: ${clientes[index].Telefone}
CEP: ${clientes[index].CEP}
UF: ${clientes[index].UF}
Cidade: ${clientes[index].Cidade}
Bairro: ${clientes[index].Bairro}
Endereco: ${clientes[index].Endereco}
Numero: ${clientes[index].Numero}
Necessidades: ${clientes[index].Necessidades}
Proposta: ${clientes[index].Proposta}
Resultado: ${clientes[index].Resultado}
`)
}

function inputResultado(divatual,index){
    document.getElementById(divatual).innerHTML+=
    `<div class="container column">
    <br>
    <input type="text" placeholder="O negócio foi fechado? Escreva aqui o feedback do cliente" name="input" id="input-resposta-${index}">
    <br>
    <button id="confirmar-resultado-${index}" class="botao">Confirmar</button>
    <div>`

    document.getElementById(`confirmar-resultado-${index}`).addEventListener("click", function(){
        clientes[index].Resultado=document.getElementById(`input-resposta-${index}`).value;
        document.getElementById(divatual).innerHTML="";
        document.getElementById("resultado").innerHTML+=
        `<div id="resultado-${index}">
        Nome: ${clientes[index].Nome} <br>
        Resultado: ${clientes[index].Resultado} <br>
        <div class="container column">
        <button onclick="maisinfo(${index})" class="botao">Mais informações</button>
        </div>
        </div>`
    })
}

function inputProposta(divatual,index){
    document.getElementById(divatual).innerHTML+=
    `<div class="container column">
    <br>
    <input type="text" placeholder="Escreva aqui a proposta a ser enviada para o cliente" name="input" id="input-proposta-${index}">
    <br>
    <button id="confirmar-proposta-${index}" class="botao">Confirmar</button>
    </div>`

    document.getElementById(`confirmar-proposta-${index}`).addEventListener("click", function(){
        clientes[index].Proposta=document.getElementById(`input-proposta-${index}`).value;
        document.getElementById(divatual).innerHTML='';
        document.getElementById('proposta').innerHTML+=
        `<div id="proposta-${index}">
        Nome: ${clientes[index].Nome} <br>
        Proposta: ${clientes[index].Proposta}<br>
        <div class="container center column">
        <button onclick="maisinfo(${index})" class="botao">Mais informações</button>
        <button onclick="inputResultado('proposta-${index}',${index})" class="botao">Resultado</button>
        </div>
        </div>`
    })
}

function inputNecessidades(divatual,index){
    document.getElementById(divatual).innerHTML+=
    `<div class="container column">
    <br>
    <input type="text" placeholder="Escreva aqui as necessidades do cliente" name="input" id="input-necessidades-${index}">
    <br>
    <button id="confirmar-necessidades-${index}" class="botao">Confirmar</button>
    </div>`

    document.getElementById(`confirmar-necessidades-${index}`).addEventListener("click", function(){
        clientes[index].Necessidades=document.getElementById(`input-necessidades-${index}`).value;
        document.getElementById(divatual).innerHTML="";
        document.getElementById('necessidades').innerHTML+=
        `<div id="necessidades-${index}">
        Nome: ${clientes[index].Nome} <br>
        Necessidades: ${clientes[index].Necessidades}<br>
        <div class="container column">
        <button onclick="maisinfo(${index})" class="botao">Mais informações</button>
        <button onclick="inputProposta('necessidades-${index}',${index})" class="botao">Elaborar proposta</button>
        </div>
        </div>`
    })
}

/* Página vendas */
    /* Adicionar cliente */
document.getElementById("adicionar-cliente").addEventListener("click", function(){
    document.getElementById("criando-cliente").innerHTML+=
    `<div class="container column">

    <label for="nome"><b>Nome</b></label>
    <input type="text" placeholder="Nome" name="nome" id="nome">
    
    <label for="e-mail"><b>E-mail</b></label>
    <input type="text" placeholder="xxxx@email.com" name="e-mail" id="email">

    <label for="telefone"><b>Telefone</b></label>
    <input type="text" placeholder="99 99999-9999" name="telefone" id="telefone">

    <label for="cep" class="active">Cep</label>
    <input type="tel" placeholder="Informe o Cep" id="cep" name="cep">
    <button class="botao" onclick="pesquisaCEP()">Pesquisar CEP</button>

    <label for="uf" class="active">UF</label>
    <input type="text" placeholder="UF" name="uf" id="uf">

    <label for="cidade" class="active">Cidade</label>
    <input type="text" placeholder="Informe a cidade" id="cidade" name="cidade" >

    <label for="bairro" class="active">Bairro</label>
    <input type="text" placeholder="Informe o Bairro" name="bairro" id="bairro">

    <label for="endereco" class="active">Endereço</label>
    <input type="text" placeholder="Informe o sua rua" name="endereco" id="endereco">

	<label for="nr_end" class="active">Número</label>
    <input type="text" placeholder="Informe o número do endereço" name="nr_end" id="nr_end">

    <button id="confirmar-cliente" class="botao">Confirmar</button>
    </div>`
    
    /* Botão confirmar */

    document.getElementById("confirmar-cliente").addEventListener("click", function(){
        /* Adicionar o cliente no array */
        clientes[i] = {
            Nome: document.getElementById("nome").value,
            Email: document.getElementById("email").value,
            Telefone: document.getElementById("telefone").value,
            CEP: document.getElementById("cep").value,
            UF: document.getElementById("uf").value,
            Cidade: document.getElementById("cidade").value,
            Bairro: document.getElementById("bairro").value,
            Endereco: document.getElementById("endereco").value,
            Numero: document.getElementById("nr_end").value,
            Necessidades: "",
            Proposta: "",
            Resultado: "",
        }

        /* Colocar na div clientes-cadastrados */
        document.getElementById("clientes-cadastrados").innerHTML+=
        `<div id="C${i}"> 
            Nome: ${clientes[i].Nome} <br>
            E-mail: ${clientes[i].Email} <br>
            Telefone: ${clientes[i].Telefone} <br>
            <div class="container center column">
            <button onclick="maisinfo(${i})" class="botao">Mais informações</button>
            <button onclick="inputNecessidades('C${i}','${i}')" class="botao">Adicionar necessidades</button>
            </div>
        </div>`

        /* Apagar o formulário */
        document.getElementById("criando-cliente").innerHTML="";
        
        /* Botão add-necessidades */

    i++
    })
})
