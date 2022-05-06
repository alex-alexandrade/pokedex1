const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.pokemon-card')


listaSelecaoPokemons.forEach(pokemon =>{

    pokemon.addEventListener('click', () => {

        //remover a classe aberto só do cartão que está aberto
        const cartaoPokemonAberto = document.querySelector('.open')        
        cartaoPokemonAberto.classList.remove('open')

        //ao clicar em um pokemon da listagem pegamos o id desse pokemon 
        //pra saber qual cartao mostrar
        const idPokemonSelecionado = pokemon.attributes.id.value

        const idDoCartaoPokemonParaAbrir = idPokemonSelecionado  + '-card'
        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
        cartaoPokemonParaAbrir.classList.add('open')

        //remover a classe ativo que marca o pokémon selecionado
        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        //adicionar a classe ativo no item da lista selecionado
        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')
    })
})