# File 2 : Desenvolvimento

A criação da API procurou aplicar os conceitos ensinados na disciplina de Desenvolvimento WEB I, além de utilizar as ferramentas e aplicações recomendadas durante esta cadeira.

Após a definição do tema e dos recursos necessários, optou-se por utilizar o Swagger Editor online para manualmente elaborar a documentação da API. Isso envolveu a descrição dos recursos da API, métodos, dados obtidos, códigos HTTP, entre outros aspectos. Como resultado desse processo, foi gerado um arquivo YAML que possibilitou a criação de um servidor (nodeJs-server).

Em cumprimento do requisitos do projeto e após a construção dos métodos (get, post, put, delete), foi usado a plataforma Docker, que proporciona a virtualização dos aplicativos utilizando o ambiente de conteinerização.
No projeto em causa foram criados o ficheiro docker.compose.yml que onde foram configurados os serviços do aplicativo de modo podermos utilizar a ferramenta Docker Compose para a criaçao das imagens e containers que vai usar também o ficheiro dockerfile.

O resultado foi a criação de duas imagens, o mysql-1 e o nodejs-server-1.
Podemos ver as printscreen's em [/doc/images/Postman](https://github.com/INF23DW1G25/REPORT_DW1_M2/tree/master/docs/images/Docker)

Para testar a a API REST foi utilizado o aplicativo Postman, através da execução dos metodos da API e observaçao dos resultados.
Podemos ver as printscreen's em [/doc/images/Postman](https://github.com/INF23DW1G25/REPORT_DW1_M2/tree/master/docs/images/Postman)

---

[< Previous](c2.md) | [^ Main](../../../) |
