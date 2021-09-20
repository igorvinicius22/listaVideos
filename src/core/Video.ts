export default class Video {
    #id: string
    #nome: string
    #like: number
    #dislike: number

    constructor(nome: string, id: string = null, like: number = null, dislike: number = null) {
        this.#nome = nome
        this.#id = id
        this.#like = like
        this.#dislike = dislike
    }

    static vazio() {
        return new Video('')
    }

    get id() {
        return this.#id
    }
    get nome() {
        return this.#nome
    }
    get like() {
        return this.#like
    }
    get dislike() {
        return this.#dislike
    }
}