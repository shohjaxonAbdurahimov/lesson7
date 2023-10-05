import { NavLink } from "react-router-dom"
import { useFetch } from "../../hooks/useFetch"

function Articles() {
    const { data: articles, isPending, error } = useFetch("http://localhost:3000/articles")

    return (
        <div className="articles-container">
            {isPending && <h3>loading ...</h3>}
            {error && <h3>{error}</h3>}
            {articles && articles.map((article) => {
                return (
                    <div className="card" key={article.id}>
                        <h3 className="text-2xl "> Title : {article.title}</h3>
                        <p className="text-xl mt-2"><i> author : {article.author}</i></p>

<NavLink className="buttonred  text-xl" to={`/articles/${article.id}`}>read More </NavLink>
                    </div>
                )
            })}
        </div>
    )
}

export default Articles