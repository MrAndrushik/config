import React from "react";
import { CSSTransition } from "react-transition-group";
import FirstCard from "../Components/FirstCard";
// import LoaderScreen from "../Components/LoaderScreen";
import Topblock from "../Components/Topblock";
import { step1 } from "../data/step1";

const FirstStep = () => {
    const [loaded, setLoaded] = React.useState(false);
    React.useEffect(() => {
        setLoaded(true);
    }, []);
    return (
        <CSSTransition
            in={loaded}
            timeout={1000}
            classNames="page"
            unmountOnExit
        >
            <div className="first">
                <Topblock />
                <h2 className="caption">1. Выберите каркас и тент</h2>
                <div className="first__wrapper">
                    {step1.map((item) => (
                        <FirstCard key={item.module} item={item} />
                    ))}
                    <div className="first__logo">
                        <img src="img/logo.svg" alt="" />
                    </div>
                </div>
            </div>
        </CSSTransition>
    );
};

export default FirstStep;
