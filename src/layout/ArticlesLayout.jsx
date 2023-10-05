import { Outlet } from 'react-router-dom'

function ArticlesLayout() {
    return (
        <div className='align-element text-3xl mt-5 '>
            <h2>my Articles </h2>

            <hr />
            <Outlet />

        </div>
    )
}

export default ArticlesLayout