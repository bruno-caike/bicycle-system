import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-solid-svg-icons"
import ImgLogo from '../../assets/img/logo-bicycle-system.svg'
import { Link } from "react-router-dom"
import { routes } from "../../utils/variables"

const Base = () => {
    return (
        <div>
            <nav>
                <div>
                    <Link to={routes.dashboard}><img src={ImgLogo} alt="Logo System" /></Link>
                </div>
                <ul>
                    <li>
                        <a href="#">
                            <FontAwesomeIcon icon={faUser} />
                            <span>Pessoa</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <FontAwesomeIcon icon={faUser} />
                            <span>Produtos</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <FontAwesomeIcon icon={faUser} />
                            <span>Pedidos</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <FontAwesomeIcon icon={faUser} />
                            <span>Compras</span>
                        </a>
                    </li>
                </ul>
                <div>
                    <button type="button">
                        <FontAwesomeIcon icon={faUser} />
                    </button>
                </div>
            </nav>
            <div>
                <header>

                </header>
                <main>
                    
                </main>
                <footer>

                </footer>
            </div>
        </div>
    )
  }
  
  export default Base;
  