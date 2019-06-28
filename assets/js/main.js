// seletores
let formulario = document.querySelector('form')
let input = document.querySelector('input')
let tarefas = document.querySelector('#aFazer')

// eventos
const eventoConcluirTarefa = () => {
    let botoesConcluir = document.querySelectorAll('#concluirTarefa')
    

    botoesConcluir.forEach((botao) => {
        botao.onclick = (evento) => {
            evento.preventDefault()

            fetch(`http://localhost:8000/api/atualizar-tarefa/${botao.getAttribute('tarefa-id')}`, {
                method: 'put',
            })
            .then(resposta => resposta.json())
            .then(dado => {
                if (dado.status == 'feito')
                    botao.parentElement.previousElementSibling.style.textDecoration = 'line-through'
                else
                    botao.parentElement.previousElementSibling.style.textDecoration = 'none'
            })
        }
    })
}

const eventoDeletarTarefa = () => {
    let botoesExcluir = document.querySelectorAll('#deletarTarefa')

    botoesExcluir.forEach((botao) => {
        botao.onclick = (evento) => {
            evento.preventDefault()

            let resposta = confirm('Quer excluir essa tarefa?')

            if (resposta)
                fetch(`http://localhost:8000/api/deletar-tarefa/${botao.getAttribute('tarefa-id')}`, {
                    method: 'delete',
                })
                .then(resposta => resposta.json())
                .then(dado => {
                    if (dado) {
                        botao.parentElement.parentElement.classList.remove('d-flex')
                        botao.parentElement.parentElement.classList.add('d-none')
                    }
                })
        }
    })
}

formulario.onsubmit = evento => {
    evento.preventDefault()

    adcionarTarefa(input.value)

    input.value = ''
    input.focus()

    listarTarefas(tarefas)
}

// funções
const listarTarefas = elemento => {
    fetch('http://localhost:8000/api/listar-tarefas')
    .then(resposta => resposta.json())
    .then(dados => {
        dados = dados.reverse()
        let html = ''

        dados.forEach(dado => {
            let span = `<span id="conteudo" class="d-flex align-items-center">${dado.conteudo}</span>`

            if (dado.status == 'feito')
                span = `<span id="conteudo" class="d-flex align-items-center" style="text-decoration: line-through">${dado.conteudo}</span>`

            html += `
                <li class="list-group-item d-flex">
                    ${span}
                    <div class="row ml-auto">
                        <a id="concluirTarefa" class="btn btn-success d-flex" tarefa-id="${dado.id}" href="#">
                            <i title="Concluir tarefa" class="material-icons">done</i>
                            <span> Concluir Tarefa </span>
                        </a>
                        <a id="deletarTarefa" class="btn btn-danger d-flex" tarefa-id="${dado.id}" href="#">
                            <i title="Deletar tarefa" class="material-icons">delete</i>
                            <span> Deletar Tarefa </span>
                        </a>
                    </div>
                </li>
            `
        })
        elemento.innerHTML = html
    }).then(() => {
        eventoConcluirTarefa()
        eventoDeletarTarefa()
    })

}

const adcionarTarefa = conteudo => {
    let formData = new FormData()
    formData.append('conteudo', conteudo)

    fetch('http://localhost:8000/api/adicionar-tarefa', {
        method: 'post',
        body: formData
    }).then(resposta => resposta.json()).then(dados => console.log(dados))
}

// execuções
listarTarefas(tarefas)

