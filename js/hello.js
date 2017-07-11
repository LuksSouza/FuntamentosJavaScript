alert("Hello World com arquivo externo!");

var empresa = "Caelum";

empresa = empresa.replace("lum", "tano");

alert(empresa);

/*var soma = 0;

for (var i = 1; i < 101; i++) {
    soma+=i;
}

alert("Soma: " + soma);*/

var pessoas = ["João", "José", "Maria", "Sebastião", "Antônio"];

for (var i = 0; i < pessoas.length; i++) {
    if (pessoas[i].length == 4) {
        alert("Nome com 4 caracteres: " + pessoas[i]);
    }
}