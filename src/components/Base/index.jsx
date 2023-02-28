import Header from "./Header";
import Nav from "./Nav";
import { BaseStyled } from "./style";

const Base = () => {
    return (
        <BaseStyled>
            <Nav />
            <div>
                <Header />
                <main>
                    
                </main>
                <footer>

                </footer>
            </div>
        </BaseStyled>
    )
  }
  
  export default Base;
  