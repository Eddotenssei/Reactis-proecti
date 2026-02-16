import { useParams } from "react-router"

const post = [ 
    "Real Steel",
    "ford vs ferrari"
]

export default function PostDetails(){
    const {id} = useParams()

    return(
        <div>
            <h1>moovies asddas {post[id - 1]}</h1>
        </div>
    )
}