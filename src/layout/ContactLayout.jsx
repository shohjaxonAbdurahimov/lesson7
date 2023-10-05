import { NavLink, Outlet } from "react-router-dom"
function ContactLayout() {
    return (


        <div className='align-element mt-20'>
            <h1 className='text-4xl'>contact</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima tenetur, necessitatibus possimus nihil repellat molestias adipisci ratione velit sit consequuntur eveniet dolor repellendus eos quos praesentium cum optio dolorum facere placeat nam perspiciatis veritatis culpa voluptas? Nobis voluptatum porro ea quaerat, corporis aspernatur assumenda debitis veritatis autem sint iste nemo repellat doloremque eligendi qui cum in rerum officiis dolor nihil sequi sapiente ad numquam quae. Aperiam dignissimos dolorem optio, et doloribus ullam facilis iusto accusantium, quis, incidunt eligendi? Ut officia necessitatibus porro delectus ipsam temporibus magnam praesentium earum, eaque ipsa, voluptatibus accusantium exercitationem reiciendis odio nesciunt rerum mollitia perspiciatis corrupti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, similique facere quae earum iste omnis doloribus recusandae illum adipisci voluptate laborum asperiores sapiente, enim repudiandae. Quaerat doloribus earum laboriosam veniam!</p>

            <nav>
                <NavLink to="faq">Faq</NavLink>
                <NavLink to="form">Form</NavLink>
            </nav>

            <Outlet />

        </div>


    )
}

export default ContactLayout