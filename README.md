## Este projeto foi desenvolvido com React

A aplicação tem como objetivo consumir dados de uma API externa e apresentar informações dinâmicas em páginas com rotas internas utilizando react-router-dom

## Tecnologias Utilizadas:

• React: Uma biblioteca JavaScript para construir interfaces de usuário.

• React Router DOM: Uma coleção de componentes para implementar navegação entre as diferentes páginas da aplicação.

• Axios: Um cliente HTTP baseado em Promises para fazer requisições à API de filmes.

• TMDB API (The Movie Database): Uma API para obter informações sobre filmes.

• CSS: Para a estilização da aplicação e seus componentes.

• JavaScript (ES6+): A linguagem de programação utilizada para a lógica da aplicação.

• Node.js e npm (ou yarn): Ambiente de execução JavaScript e gerenciador de pacotes utilizado para instalar as dependências e executar o projeto.

• Local Storage: Para armazenar os filmes favoritos do usuário localmente no navegador.

• react-toastify: Uma biblioteca para exibir notificações elegantes para o usuário.

## Para comerçamos a testar o código precisamos fazer os seguintes passos

cd (nome do projeto)

Instalar as dependências do projeto:

npm install

Por ultimo o comando de rodar o código:

npm start


## Configuração de Rotas com React Router DOM:

• Foram criadas pastas e arquivos para as páginas Home e Filme dentro da pasta src/pages.

• O componente react-router-dom foi instalado para configurar as rotas.

• Um arquivo routes.js foi criado dentro de src para definir as rotas, onde a página Home foi definida como a rota padrão (/) e a página Filme com uma rota dinâmica (/filme/:id).

• O componente RoutesAPP (contendo a configuração das rotas) foi importado e renderizado dentro do App.js.

• Foram realizados testes para verificar se as rotas estavam funcionando corretamente, acessando a página inicial e a página de filme com um ID de teste (/filme/1).

## Criação de um Header Comum:

• Uma pasta Header foi criada dentro de src/components, contendo um arquivo index.js para o componente Header.

• O componente Header foi importado e renderizado dentro do componente RoutesAPP em routes.js, garantindo que ele aparecesse em todas as páginas.

• Um arquivo header.css foi criado dentro da pasta Header para estilizar o componente, e este arquivo foi importado no index.js do Header.

• O componente Link do react-router-dom foi importado para criar links de navegação no Header para a página Home (/) e uma futura página de favoritos.

• Foi sugerida uma estilização para o Header.

## Configuração da Home com Requisição à API do TMDB:

• Foi explicado como criar uma conta e obter uma chave de API no site do TMDB (https://www.themoviedb.org/?language=pt-BR).

• Foi demonstrado como funciona uma requisição à API do TMDB, incluindo a URL base, endpoints e o uso da api_key como parâmetro.

• A importância da documentação da API foi mencionada.

• Foi explicado o uso de parâmetros como language para mudar o idioma da resposta da API.

• Diferentes endpoints da API, como now_playing para obter filmes em cartaz, foram explorados.

## Um serviço para consumir a API foi criado:

• Uma pasta services e um arquivo api.js foram criados dentro de src.

• A biblioteca axios para fazer requisições HTTP foi instalada.

• O axios foi importado em api.js, e uma constante api foi criada com a URL base da API do TMDB.

## O consumo da API na página Home foi implementado:

• Os hooks useEffect e useState foram importados em src/pages/Home/index.js.

• Um useState chamado filmes e setFilmes foi criado.

• Uma função assíncrona loadFilmes dentro do useEffect foi criada para fazer a requisição GET usando axios para o endpoint movie/now_playing, incluindo a api_key, language, e page como parâmetros.

• A resposta da API foi inicialmente logada no console.

• O acesso à lista de filmes dentro da resposta da API (response.data.results) foi demonstrado.

• O estado filmes foi atualizado com os resultados da API, utilizando a função setFilmes, e a função slice foi usada para exibir apenas os 10 primeiros filmes.

• A lista de filmes foi renderizada na página Home utilizando a função map no array filmes, exibindo o título de cada filme.

• A necessidade de uma chave única (key) para cada item da lista foi abordada, utilizando o id de cada filme retornado pela API.

• A exibição da imagem de cada filme foi implementada buscando a URL base das imagens na documentação da API e concatenando com o poster_path retornado pela API, utilizando template strings (``) na tag <img>.

• As rotas dinâmicas para cada filme foram configuradas utilizando o componente Link do react-router-dom, passando o id do filme para a rota /filme/:id.

• Um arquivo home.css foi criado e importado em src/pages/Home/index.js para estilizar a página Home.

## Criação de Loading e Página de Not Found:

• Um estado booleano loading foi implementado na página Home para indicar se os filmes estão sendo carregados.

• Uma mensagem de "Carregando filme..." foi exibida condicionalmente com base no estado loading.

• A estilização da classe loading foi mencionada.

• O estado loading foi alterado para false após a conclusão da requisição da API na função loadFilmes, melhorando a experiência do usuário ao simular uma conexão lenta.

• Uma pasta Error e um arquivo index.js foram criados dentro de src/pages para a página de "Página não encontrada".

• Uma rota com o path '*' foi adicionada em routes.js para renderizar o componente Error para qualquer rota não existente.

• Conteúdo padrão e um link para a Home foram adicionados à página de erro.

• Um arquivo error.css foi criado e importado para estilizar a página de "Página não encontrada".

## Criação Dinâmica da Página de Detalhes de Cada Filme:

• Na página src/pages/Filme/index.js, os hooks useEffect, useState, e useParams foram importados para acessar o ID do filme na rota dinâmica.

• Uma requisição à API para obter os detalhes de um filme específico com base no id foi implementada utilizando axios.get no endpoint correto (/movie/${id}), incluindo a api_key e language como parâmetros.

• Um tratamento de erro (then e catch) foi adicionado à requisição.

• Os dados do filme retornados pela API foram logados no console para verificação.

• Os estados filme e loading foram criados para armazenar os detalhes do filme e controlar o carregamento.

• A atualização do estado filme com os dados da API e a alteração do estado loading para false após a resposta foram implementadas.

• Um carregamento condicional ("Carregando detalhes...") foi adicionado à página de detalhes do filme.

• A exibição de informações como título, pôster (com concatenação da URL base), sinopse e avaliação do filme foi implementada no retorno do componente.

• Um arquivo filme.css foi criado e importado para estilizar a página de detalhes do filme.

• Dois botões ("Salvar" e "Trailer") foram adicionados à página de detalhes.

• O useNavigate hook foi importado e utilizado para redirecionar o usuário para a Home caso ocorra um erro ao buscar os detalhes de um filme inexistente (tratamento do .catch).

## Exibição do Trailer no YouTube:

• Foi planejado que ao clicar no botão "Trailer", uma busca no YouTube seria feita utilizando o título do filme obtido da API e a palavra "trailer". (A implementação específica do link para o YouTube não foi detalhada no trecho fornecido).

## Salvamento de Filmes Favoritos:

• Uma função salvarFilme foi criada para salvar os detalhes do filme no localStorage do navegador, utilizando uma chave chamada @primeflix. Foi implementada uma lógica para verificar se o filme já havia sido adicionado aos favoritos, evitando duplicatas.

• A função salvarFilme foi chamada no evento onClick do botão "Salvar" na página de detalhes do filme.

• Foi demonstrado como verificar os filmes salvos no localStorage através da aba "Application" ou "Armazenamento Local" das ferramentas de desenvolvedor do navegador.

• Um alerta foi implementado para informar o usuário se o filme foi salvo com sucesso ou se já estava nos favoritos.

## Construção da Página de Favoritos:

• Uma pasta Favoritos e um arquivo index.js foram criados dentro de src/pages para a página de favoritos, juntamente com um arquivo favoritos.css.

• Uma rota para a página de favoritos (/meus-filmes) foi adicionada em routes.js, e o componente Favoritos foi importado.

• O conteúdo da página de favoritos foi implementado para buscar os filmes salvos no localStorage e exibi-los como uma lista.

• Um botão "Excluir" foi adicionado para permitir a remoção de filmes da lista de favoritos. Uma função excluirFilmes foi criada para manipular o array de filmes no localStorage e remover o filme com base no seu id.

• Uma verificação foi adicionada para exibir uma mensagem caso não haja filmes salvos como favoritos.

• Uma correção foi feita no useEffect da página Filme para evitar um possível erro.

## Estilização de Alerts com react-toastify:

• A biblioteca react-toastify foi instalada para exibir notificações estilizadas.

• O componente ToastContainer foi importado e adicionado ao App.js.

• A função toast foi importada na página Filme.

• Os alerts utilizados anteriormente foram substituídos por toast.success (para sucesso) e toast.warn (para aviso) para exibir mensagens mais elegantes.

O resultado final esperado é uma aplicação web front-end completa, que interage com uma API externa para exibir informações sobre filmes, oferece uma navegação clara entre as páginas, permite aos usuários salvar seus filmes preferidos e proporciona uma experiência de usuário aprimorada com indicadores de carregamento e alertas estilizados
