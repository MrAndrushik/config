import React from "react";
import { Link } from "react-router-dom";

const Topblock = () => {
    const [visibleMenu, setVisibleMenu] = React.useState(false);
    return (
        <div className="top-block">
            <Link className="top__link" to={"/"}>
                {" "}
                <img src="img/back-arrow.svg" alt="back-arrow" />{" "}
            </Link>
            <h1 className="top-block__title">Конфигуратор</h1>
            <button
                onClick={() => setVisibleMenu(!visibleMenu)}
                className="top__btn"
            >
                <img src="img/burger-menu.svg" alt="" />
            </button>
        </div>
    );
};

export default Topblock;
