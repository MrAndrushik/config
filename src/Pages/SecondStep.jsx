import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { CSSTransition } from "react-transition-group";
import Bottomblock from "../Components/Bottomblock";
import Configuration from "../Components/Configuration";
import ScrollToTop from "../Components/ScrollToTop";
import SecondCard from "../Components/SecondCard";
import { step2 } from "../data/step2";

const SecondStep = () => {
    const state = useSelector((state) => state);
    const navigate = useNavigate();
    const module = useSelector((state) => state?.module);
    const filteredStep2 = step2.filter((item) => item.module === module);
    const [loaded, setLoaded] = React.useState(false);

    React.useEffect(() => {
        if (state === null) return navigate("/");
        setLoaded(true);
    }, [state, navigate]);

    return (
        <div>
            <ScrollToTop />
            <CSSTransition
                in={loaded}
                timeout={1000}
                classNames="page"
                unmountOnExit
            >
                <div className="second">
                    <h2 className="caption">2. Выберите зимний комплект</h2>
                    <div className="wrapper">
                        {filteredStep2.length === 0 ? (
                            <div className="nothing">Nothing to choose</div>
                        ) : (
                            filteredStep2.map((item) => (
                                <SecondCard key={item.module} item={item} />
                            ))
                        )}
                        <Configuration completed={"30%"} />
                    </div>
                </div>
            </CSSTransition>
            <Bottomblock back="/" skip="/third" />
        </div>
    );
};

export default SecondStep;
