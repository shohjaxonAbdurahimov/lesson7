
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom"
import RootLayout from "./layout/rootLayout"
//pages
import Home from './pages/home'
import About from './pages/about'
import Faq from "./pages/help/Faq"
import Form from "./pages/help/form"
import Articles from "./pages/articles/articles"
import ArticlesDeteil from "./pages/articles/articlesDeteil"
import PageNotFound from "./pages/pageNotFound"
import ContactLayout from "./layout/ContactLayout"
import ArticlesLayout from "./layout/ArticlesLayout"



function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout />}>
        <Route index path='/' element={<Home />}></Route>
        <Route path='about' element={<About />}></Route>
        <Route path="contact" element={<ContactLayout />}>
          <Route path="faq " element={<Faq />}></Route>
          <Route path="form" element={<Form />}></Route>
      </Route>
       <Route path="articles" element={<ArticlesLayout/>}>
<Route index element={<Articles/>}/>
<Route path=":id" element={<ArticlesDeteil/>}/>
       </Route>

{/**page not fount  */}
<Route  path="*" element={<PageNotFound/>}/>
      </Route>
    )
  )
  return (
    <div className='App'>
      <RouterProvider router={routes} />
    </div>
  )
}
export default App