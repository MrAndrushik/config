import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { setModuleAction } from "../store/firstReducer";

const FirstCard = ({ item }) => {
    const [activeColor, setActiveColor] = React.useState("белый");
    const [activePopup, setActivePopup] = React.useState(false);
    const state = useSelector((state) => state);
    const navigate = useNavigate();
    React.useEffect(() => {
        if (state === null) return navigate("/");
    }, [state, navigate]);

    const getColorPrice = () => {
        return item.colors.find((color) => color.title === activeColor).price;
    };

    const getColorImage = () => {
        return item.colors.find((color) => color.title === activeColor).img;
    };
    const dispatch = useDispatch();

    const setModule = (item) => {
        const cuurentItem = {
            ...item,
            colors: item.colors.filter((color) => color.title === activeColor),
            price: item.price + getColorPrice(),
        };
        dispatch(setModuleAction(cuurentItem));
        navigate("/second");
    };

    return (
        <div>
            <div
                className={
                    state?.module === item.module
                        ? "first__item be-relative active-border"
                        : "first__item be-relative"
                }
            >
                <img src={getColorImage()} alt="" />
                <div className="first__content">
                    <p>Тент:</p>
                    <p className="first__module">{item.module} м</p>
                    <p>Каркас:</p>
                    <p className="first__awning">{item.awning} руб</p>
                    <p>Цена: </p>
                    <p className="first__price">
                        {item.price + getColorPrice()} руб
                    </p>
                    <p>Цвет:</p>
                    <p className="first__color">{activeColor}</p>
                </div>
                <div className="first__colors">
                    {item.colors.map((color) => (
                        <button
                            key={color.title}
                            style={{
                                background: color.background,
                            }}
                            className={
                                activeColor === color.title
                                    ? "first__color-btn first__color-btn_active"
                                    : "first__color-btn"
                            }
                            onClick={() => setActiveColor(color.title)}
                        ></button>
                    ))}
                </div>
                <p className="color__price">+ {getColorPrice()} руб</p>
                <button onClick={() => setModule(item)} className="btn-choose">
                    Выбрать
                </button>
                <button
                    onClick={() => setActivePopup(true)}
                    className="btn-select"
                >
                    Подробнее
                </button>
                {activePopup && (
                    <div className="popup">
                        <span
                            onClick={() => setActivePopup(false)}
                            style={{
                                display: "block",
                                textAlign: "right",
                                cursor: "pointer",
                            }}
                        >
                            x
                        </span>
                        Здесь будет какая-то information
                    </div>
                )}
            </div>
        </div>
    );
};

export default FirstCard;
