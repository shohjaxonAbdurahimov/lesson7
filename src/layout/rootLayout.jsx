import BreadCrums from '../components/breadCrums'
import { NavLink, Outlet } from 'react-router-dom'
function RootLayout() {
    return (

        <>
            <header>
                <div className="bg-slate-200 py-5">
                    <div className="align-element flex justify-between">
                        <h1 className="text-4xl">Articles</h1>
                        <div className="flex items-center gap-4">
                            <NavLink className="font-medium  text-xl px-2 py-1 rounded transition duration-300" to="/articles">Article</NavLink>
                            <NavLink className="font-medium  text-xl px-2 py-1 rounded transition duration-300" to="/">Home</NavLink>
                            <NavLink className="font-medium  text-xl  px-2 py-1 rounded transition duration-300" to="/about">About</NavLink>
                            <NavLink className="font-medium  text-xl  px-2 py-1 rounded transition duration-300" to="/Contact">Contact</NavLink>
                        </div>
                    </div>
                </div>
                    <BreadCrums/>

            </header>
            <main>
                <Outlet />
            </main>
            <footer></footer>
        </>
    )
}

export default RootLayout