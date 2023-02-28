import Nav from "./Nav";
import Header from "./Header";
import Footer from "./Footer";

import { BaseStyled, MainStyled } from "./style";

const Base = () => {
    return (
        <BaseStyled>
            <Nav />
            <MainStyled>
                <Header />
                <main>
                    
                </main>
                <Footer />
            </MainStyled>
        </BaseStyled>
    )
  }
  
  export default Base;
  