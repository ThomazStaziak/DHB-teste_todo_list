# teste_todo_list

Olá candidato seu desafio é consumir uma API rest, e construir uma SPA(single page application) de to do list utilizando HTML, CSS e Javascript Vanilla. Confira abaixo mais informações:

* [Requisitos](#requisitos-mínimos)
* [Como configurar a API](#como-configurar-api)
* [Endpoints](#endpoints)

## Endpoints

**/listar-tarefas** => método GET:
Retorna todas as tarefas que estão no banco de dados.

**/adicionar-tarefa** => método POST:
Adiciona uma tarefa ao banco de dados.
Precisa de um campo chamado "conteudo" com o valor da tarefa, exemplo:

```html
 <input type="name" name="conteudo" />
```

**/atualizar-tarefa/:id** => método PUT
Atualiza o status de uma tarefa, se ela estiver como "a fazer" será atualizada para "feito" ou se ela estiver "feito" será atualizada para "a fazer".
Precisa do id da tarefa, exemplo:

```
/atualizar-tarefa/3
```

## Como configurar a API
1. Crie um banco de dados chamado todo_list
2. Clone a API desse [repositório](https://github.com/ThomazStaziak/ApiTodoList.git) 
3. Entre na pasta do repositório e digite os seguintes comando:
	a. Instalando as dependências do projeto:
	```bash
	$ composer install
	```
	b. Migrando as tabelas para o banco de dados:
	```bash
	$ php artisan migrate
	```	
	c. Iniciando a API
	```bash
	$ php artisan serve
	```
## Requisitos mínimos
 1. Input para adicionar tarefa através de um clique botão ou ao pressionar tecla enter
 2. Seção para mostrar as tarefas inseridas que estão com o status "a fazer"
 3. Botão de "Feito" para cada tarefa com o status "a fazer", ao clicar a tarefa deve sumir da seção "a fazer"

## Requisitos opcionais
1. Seção com tarefas que estão com o status "feito"
2. Botão de "A Fazer" para cada tarefa com o status "feito", ao clicar a tarefa deve sumir da seção "feito" e aparecer na seção "a fazer"
3. Fazer a mesma coisa do item acima para a seção "a fazer"
