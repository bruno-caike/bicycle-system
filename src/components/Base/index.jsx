import Nav from "./Nav";
import Header from "./Header";
import Footer from "./Footer";

import { BaseStyled, Main, MainStyled } from "./style";

const Base = ({ children }) => {
    return (
        <BaseStyled>
            <Nav />
            <MainStyled>
                <Header />
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
  