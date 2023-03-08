import Nav from "./Nav";
import Header from "./Header";
import Footer from "./Footer";

import { BaseStyled, Main, MainStyled } from "./style";

const Base = () => {
    return (
        <BaseStyled>
            <Nav />
            <MainStyled>
                <Header />
                <Main>
                    <div>
                        
                    </div>
                </Main>
                <Footer />
            </MainStyled>
        </BaseStyled>
    )
  }
  
  export default Base;
  