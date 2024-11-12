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

    toString() {
        return "Título: " + this.Titulo + " | Autor: " + this.Autor + " | Disponibilidade: " + this.Disponivel
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
        this.ListaLivros = this.ListaLivros.filter(livro => livro.Titulo !== titulo);

        console.log("Lista de livros atualizada:", this.ListaLivros.map(livro => livro.toString()).join("\n"));
    }

    BuscarLivro(titulo) {
        for (let index = 0; index < this.ListaLivros.length; index++) {
            if (titulo === this.ListaLivros[index].Titulo) {
                return this.ListaLivros[index]
            }
        }
    }

    ListarDisponíveis() {
        let livrosDisponiveis = this.ListaLivros.filter(x => x.Disponivel === true)

        if (livrosDisponiveis.length > 0) {
            console.log(livrosDisponiveis.map(livro => livro.toString()).join("\n"))
        } else {
            console.log("Não há livros disponíveis para empréstimo.");
        }
    }
}



let minhaBiblioteca = new Biblioteca()


function funBiblioteca() {

    let opcao = Number(prompt("Insira a opção que deseja:  1: Adicionar um Livro | 2: Remover um livro | 3: Buscar um livro | 4: Listar livros disponíveis"))

    switch (opcao) {
        case 1:
            minhaBiblioteca.AdicionarLivro()
            break;

        case 2:
            let tituloRemover = prompt("Insira o título do Livro que deseja remover")
            minhaBiblioteca.RemoverLivro(tituloRemover)
            break;

        case 3:
            let tituloBuscar = prompt("Insira o título do Livro que deseja Buscar")
            let livroByTitulo = minhaBiblioteca.BuscarLivro(tituloBuscar)
            if (livroByTitulo != undefined) {
                console.log("Livro localizado com sucesso!")
                console.log(livroByTitulo.toString())

                let opcaoLivro = Number(prompt("Insira a opção que deseja:  1: Emprestar o livro| 2: Desvolver o livro"))

                switch (opcaoLivro) {
                    case 1:
                        livroByTitulo.Emprestar()
                        alert("Operação emprestar feita com sucesso")
                        console.log(livroByTitulo.toString())
                        break;

                    case 2:
                        livroByTitulo.Devolver()
                        alert("Operação devolver feita com sucesso")
                        console.log(livroByTitulo.toString())
                        break;

                    default:
                        alert("Opção Inválida")
                        break;
                }

                break;

            } else {
                alert("Livro não encontrado!")
            }

        case 4:
            minhaBiblioteca.ListarDisponíveis()
            break;

        default:
            alert("Opção Inválida")
            break;
    }
}

let loop = true
while (loop) {

    funBiblioteca()


    let stop = Number(prompt("Deseja continuar?  1: sim  |  2: não"))
    if (stop != 1) {
        loop = false
    }
}