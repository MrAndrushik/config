import React from "react";
import { useNavigate } from "react-router";
import { CSSTransition } from "react-transition-group";

const Bottomblock = ({ back, skip }) => {
    React.useEffect(() => {
        setLoaded(true);
    }, []);

    const [loaded, setLoaded] = React.useState(false);
    const navigate = useNavigate();
    return (
        <CSSTransition
            in={loaded}
            timeout={1000}
            classNames="page"
            unmountOnExit
        >
            <div className="bottom-block">
                <button
                    className="bottom-block__btn"
                    onClick={() => navigate(back)}
                >
                    Назад
                </button>
                <button
                    className="bottom-block__btn continue"
                    onClick={() => navigate(skip)}
                >
                    Продолжить
                </button>
            </div>
        </CSSTransition>
    );
};

export default Bottomblock;
