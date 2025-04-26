import { Link, NavLink } from "react-router"

export const Header = () => {
  return (
    <header className="py-4 px-4">
      <nav className="flex items-center">
        <div className="flex-1">
            <Link to="/"><div className="align-left text-xl flex flex-column"><img src='/reverse-djed.svg' alt='Reverse DJED' />Reverse DJED</div></Link>
        </div>

        <div className="flex-1 flex justify-center">
            <ul className="flex items-center">
                <li className="m-3"><NavLink to="/">Home</NavLink></li>
                <li className="m-3"><NavLink to="/djed">DJED</NavLink></li>
                <li className="m-3"><NavLink to="/shen">SHEN</NavLink></li>
            </ul>
        </div>
        <div className="flex-1 flex justify-end space-x-4">
            

        </div>
      </nav>
      
    </header>
  )
}