## Chat Bot

<p>
Este chat bot feito na plataforma take blip tem como principal objetivo mostrar os 6 valores da Take Blip. E como desafio adicional foi requisitada a criação de uma API para consumir os dados dos repositórios da takenet no Git Hub. 
</br>Eles devem ser ordenados em ordem crescente do mais antigo até o mais atual e os 5 repositórios escritos em C# devem ser enviados para que possam ser acessados.
</p>

### Como foi feito

<p>
Utilizei da plataforma para a criação do fluxo conversacional e de NodeJs para a criação da API intermediária.</br>
A API intermediário pega todos os repositórios através da API do GitHub e armazena em uma váriavel. Através desta utilizei da funções filter() e slice() do JavaScript de forma a retornar apenas os repositórios desejados.</br>
Por fim, dentro do bloco '9 - Desafio' na parte de 'Ações' criei a requisição a API intermediária e um script para tornar os valores JSON em dictionary de forma a serem acessados mais facilmente. 
</p>

### Dúvidas e Problemas encontrados

<p>
Quando criei o fluxo conversacional ele funcionou perfeitamente, contudo durante minhas tentivas de pegar as respostas da API posso ter mexido em algo que atrapalhou a devida continuidade do fluxo, de forma que as vezes se obtém resposta e as vezes não. </br>
Apesar de procurar por respostas não consegui encontrar a causa nem mesmo debugando de forma que ficou inviável testar se a integração da API com o chat bot realmente funcionou. Espero que caso tenham uma possível solução me orientem através de feedback para que assim eu posso corrigir. Apenas por curiosidade mesmo.</br>
Como faço para inserir imagens dentro do carrossel? Apesar de utilizar da URI criada não tenho tanta certeza de como poderia fazer pra inserir imagens diferetes como as que estão no fluxo conversacional de exemplo. </br>
</p>

### Considerações finais

<p>
Este foi um projeto interessante pois eu não sabia de uma ferramenta que permitisse a criação e publicação de uma chat bot de forma tão simplificada quanto essa. Apesar, de não parece estar rodando muito bem no chat para o desafio. Vocês possuem um forum bem explicativo e um conjunto de aulas que também auxiliam na curva de aprendizagem.</br>
Dos desafios propostos o que achei mais desafiador foi a criação da API de uma forma otimizada, relativamente adaptável e que possa ser reaproveitada.</br>
Vou deixat a API criada no ar para que possa ser acessada caso necessário, o link para ela é: https://repos-chat-bot.herokuapp.com/
</p>



