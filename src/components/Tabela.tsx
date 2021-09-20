import { useState } from "react";
import { isPropertySignature } from "typescript";
import Video from "../core/Video";
import { IconeDislike, IconeLike } from "./Icones";

interface TabelaProps {
    videos: Video[]
    videoLike?: (video: Video) => void
    videoDislike?: (video: Video) => void
}

export default function Tabela(props: TabelaProps) {
    const state = useState(0)
    let numeroLike = state[0]
    let numeroDislike = state[0]
    let alterarNumero = state[1]

    function incrementarLike() {
        alterarNumero(numeroLike+1)
    }
    function incrementarDislike() {
        alterarNumero(numeroDislike+1)
    }

    const exibirLikes = props.videoLike && props.videoDislike

    function renderizarCabecalho() {
        return (
            <tr>
                <th className="text-left p-4"></th>
                <th className="text-left p-4">Vídeo</th>
                <th className="text-left p-4">Likes</th>
                <th className="text-left p-4">Dislikes</th>
                {exibirLikes ? <th className="p-4">Like / Dislike</th> : false }
            </tr>
        )
    }

    function renderizarDados() {
        return props.videos?.map((video, i) => {
            return (
                <tr key={video.id}
                    className={`${i % 2 === 0 ? 'bg-gray-900' : 'bg-gray-800'}`}>
                    <td className="text-left p-4">{video.id}</td>
                    <td className="text-left p-4">{video.nome}</td>
                    <td className="text-left p-4">{video.like}</td>
                    <td className="text-left p-4">{video.dislike}</td>
                    {exibirLikes ? renderizarLikes(video) : false}
                </tr>
            )
        })
    }

        function renderizarLikes(video: Video){
            return (
                <td className="flex justify-center">
                    {props.videoLike ? (
                        <button Onclick={incrementarLike} className={`
                        flex justify-center items-center
                        text-green-500 rounded-full p-2 m-1
                        hover:bg-gray-500
                    `}>
                        {IconeLike}
                    </button>
                    ) : false}

                    {props.videoDislike ? (
                         <button onClick={incrementarDislike} className={`
                        flex justify-center items-center
                        text-red-600 rounded-full p-2 m-1
                        hover:bg-gray-500
                    `}>
                        {IconeDislike}
                    </button>
                    ) : false}                   
                </td>
            )
        }

        return (
        <table className="w-full rounded-xl overflow-hidden">
            <thead className={`
            text-white
            bg-gradient-to-r from-red-600 to-red-900
            `}>
                {renderizarCabecalho()}
            </thead>
            <tbody>
                {renderizarDados()}
            </tbody>
        </table>
    )
}