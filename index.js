class Livro {

    Titulo
    Autor
    AnoPublicacao
    Disponivel

    constructor(titulo, autor, anoPublicacao) {
        this.Titulo = titulo
        this.Autor = autor
        this.AnoPublicacao = anoPublicacao
        this.Disponivel = true
    }

    Emprestar() {
        if (this.Disponivel === true) {
            this.Disponivel = false
        } else {
            alert("O livro não está disponível")
        }
    }

    Devolver() {
        this.Disponivel = true
    }

    __str__() {
        return "Título: " + titulo + " | Autor: " + autor + " | Disponibilidade: " + this.Disponivel
    }
}


class Biblioteca {

    ListaLivros = []

    AdicionarLivro() {
        let tituloLivro = prompt("Insira o Título do livro")
        let autorLivro = prompt("Insira o Autor do livro")
        let anoPublicacaoLivro = Number(prompt("Insira o Anos de Publicação do livro"))
        let novoLivro = new Livro(tituloLivro, autorLivro, anoPublicacaoLivro)

        this.ListaLivros.push(novoLivro)
    }

    RemoverLivro(titulo) {
        for (let index = 0; index < this.ListaLivros.length; index++) {
            if (titulo === this.ListaLivros[index].Titulo) {
                this.ListaLivros.splice(index, 1)
            }
        }
        console.log("Lista de livros atualizada: " + this.ListaLivros)
    }

    BuscarLivro(titulo) {
        for (let index = 0; index < this.ListaLivros.length; index++) {
            if (titulo === this.ListaLivros[index].Titulo) {
                return this.ListaLivros[index]
            }
        }
    }

    ListarDisponíveis() {
        let novaLista = this.ListaLivros.filter(x => x.Disponivel === true)
        return "Livros disponíveis para empréstimo: " + novaLista
    }
}