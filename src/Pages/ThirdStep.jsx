import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { CSSTransition } from "react-transition-group";
import Bottomblock from "../Components/Bottomblock";
import Configuration from "../Components/Configuration";
import ScrollToTop from "../Components/ScrollToTop";
import { ThirdItem } from "../Components/ThirdItem";
import { step3 } from "../data/step3";

const ThirdStep = () => {
    const state = useSelector((state) => state);
    const navigate = useNavigate();
    React.useEffect(() => {
        if (state === null) return navigate("/");
    });

    const module = useSelector((state) => state?.module);
    const filteredData = step3.filter((item) => item.module === module)[0];
    const [loaded, setLoaded] = React.useState(false);
    React.useEffect(() => {
        setLoaded(true);
    }, []);

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
                    <h2 className="caption">3. Выберите торцевый шторы</h2>
                    <div className="wrapper">
                        {filteredData?.types.map((item) => (
                            <ThirdItem item={item} key={item.id} />
                        ))}
                        <Configuration completed={"50%"} />
                    </div>
                </div>
            </CSSTransition>
            <Bottomblock back="/second" skip="/fourth" />
        </div>
    );
};

export default ThirdStep;
