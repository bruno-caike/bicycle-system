import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse, faCircleUser, faUser, faLock, faRightFromBracket, faBars } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom";
import { routes } from "../../../utils/variables";
import { HeaderStyled, NavStyled, ProfileStyled } from "./style";

const Header = ({ setCloseMenu }) => {
    const handleClickBtnCloseNav = () => setCloseMenu(close => !close);
    return (
        <HeaderStyled>
            <NavStyled>
                <button type="button" onClick={handleClickBtnCloseNav} title="Fechar menu"><FontAwesomeIcon icon={faBars} /></button>
                <ul>
                    <li><Link to={routes.home}><FontAwesomeIcon icon={faHouse} /></Link></li>
                    <li>/ dashboard</li>
                </ul>
            </NavStyled>
            <ProfileStyled>
                <input type="checkbox" name="profile_input" id="profile_input" />
                <label htmlFor="profile_input"><FontAwesomeIcon icon={faCircleUser} /></label>
                <ul>
                    <li>
                        <Link to={routes.home}>
                            <FontAwesomeIcon icon={faUser} />
                            <span>Perfil</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={routes.home}>
                            <FontAwesomeIcon icon={faLock} />
                            <span>Alterar Senha</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={routes.home}>
                            <FontAwesomeIcon icon={faRightFromBracket} />
                            <span>Sair</span>
                        </Link>
                    </li>
                </ul>
            </ProfileStyled>
        </HeaderStyled>
    );
}
export default Header;