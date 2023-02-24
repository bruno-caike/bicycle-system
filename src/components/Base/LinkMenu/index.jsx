import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { LinkAncora } from "./style";
const LinkMenu = ({ icon, text, url }) => {
    return (
        <LinkAncora to={url}>
            <FontAwesomeIcon icon={icon} />
            <span>{text}</span>
        </LinkAncora>
    );
}
export default LinkMenu;