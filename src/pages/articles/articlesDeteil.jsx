import { useParams } from "react-router-dom"
import { useFetch } from "../../hooks/useFetch"
function articlesDeteil() {

    const {id }=useParams()
   const url ='http://localhost:3000/articles/'+ id
   const {data :article , error, isPending}=useFetch(url)
    
  return (
    <div>
         {isPending && <h3>loading ...</h3>}
            {error && <h3>{error}</h3>}

            {article && <>
            <img src={article.image} alt={article.title} height='300px'/>
            <h2 className="mt-3">Title : {article.title}</h2>
            <p className="mt-3 text-xl">Author : {article.author}</p>
            <p className="mt-3 text-xl">
                {article.body}
            </p>
            </>}
    </div>
  )
}

export default articlesDeteil