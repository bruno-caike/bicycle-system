import Nav from "./Nav";
import Header from "./Header";
import Footer from "./Footer";

import { BaseStyled, Main, MainStyled } from "./style";
import { useState } from "react";

const Base = ({ children }) => {
    const [closeMenu, setCloseMenu] = useState(false);
    return (
        <BaseStyled>
            <Nav closeMenu={closeMenu} />
            <MainStyled>
                <Header setCloseMenu={setCloseMenu} />
                <Main>
                    <div>
                        {children}
                    </div>
                </Main>
                <Footer />
            </MainStyled>
        </BaseStyled>
    )
  }
  
  export default Base;
  