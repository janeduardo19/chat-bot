const axios = require('axios');
const { json } = require('express');

module.exports = {
	async pesquisarRespositorios(req, res) {

		var dados1, dados2, todosDados;
		var escolhidos, escolhidos2;
		var page = 1, tamanho;

		for (; page <= 2; page++) {
			await axios.get('https://api.github.com/orgs/takenet/repos?direction=asc&per_page=100&page=' + page)
				.then(function (resposta) {

					if (page == 1) {
						dados1 = resposta.data;
					} else {
						if (page == 2) {
							dados2 = resposta.data;
						}
					}

					todosDados = dados1.concat(dados2);

				}).catch((err) => {
					res.json({ msg: "Repositório não encontrado" + err })
				})
		}

		//console.log(todosDados[106].id);

		escolhidos = todosDados.filter((item) => item.language == 'C#');
		escolhidos2 = escolhidos.slice(0, 5);

		res.json(escolhidos2);
	}
}
