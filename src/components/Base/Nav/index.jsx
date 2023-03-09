import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faUserGroup, faStore, faList, faCartShopping, faAngleLeft } from "@fortawesome/free-solid-svg-icons"

import { Link } from "react-router-dom"

import LinkMenu from "../LinkMenu"

import { routes } from "../../../utils/variables"
import { generateRandom } from "../../../utils/functions"

import ImgLogo from '../../../assets/img/logo-bicycle-system.svg'
import ImgLogoMini from '../../../assets/img/logo-bicycle-system-mini.svg'

import { LogosNav, MinifyNav, NavStyle } from "./style"

const links = [
    {icon: faUserGroup, text: "Pessoas", url: "#"},
    {icon: faStore, text: "Produtos", url: "#"},
    {icon: faList, text: "Pedidos", url: "#"},
    {icon: faCartShopping, text: "Estoque", url: "#"},
    {icon: faUser, text: "Usuários", url: "#"},
];

const Nav = ({ closeMenu }) => {
    return (
        <NavStyle closeMenu={closeMenu}>
            <LogosNav>
                <Link to={routes.dashboard}><img src={ImgLogo} alt="Logo System" /></Link>
            </LogosNav>
            <ul>
                {links.map(({ icon, text, url }) => {
                    return (
                        <li key={generateRandom()}>
                            <LinkMenu icon={icon} text={text} url={url} />
                        </li>
                    );
                })}
            </ul>
        </NavStyle>
    );
}
export default Nav;