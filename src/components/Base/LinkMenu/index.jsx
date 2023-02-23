import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
const LinkMenu = ({ icon, text, url }) => {
    return (
        <a href={url}>
            <FontAwesomeIcon icon={icon} />
            <span>{text}</span>
        </a>
    );
}
export default LinkMenu;