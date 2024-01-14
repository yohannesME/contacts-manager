import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";

const Landing = () => {
  return (
    <Wrapper>
      <main>
        <nav>
          <Logo />
        </nav>

        <div className="container page">
          {/* Info */}
          <div className="info">
            <h1>
              Contact <span>Management</span> Application
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              minus fugiat eligendi aperiam, ut laudantium deleniti aut maiores
              temporibus molestias optio eos eveniet dignissimos cum tempore?
              Debitis similique vel soluta.
            </p>

            <button className="btn btn-hero">login/register</button>
          </div>
          <img src={main} alt="Contacts" className="img main-img" />
        </div>
      </main>
    </Wrapper>
  );
};

export default Landing;
