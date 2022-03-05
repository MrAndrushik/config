import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { CSSTransition } from "react-transition-group";
import { setWindowsInRoofAction } from "../store/firstReducer";

export const FourthItem = ({ item }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const state = useSelector((state) => state);
    const [loaded, setLoaded] = React.useState(false);
    React.useEffect(() => {
        setLoaded(true);
        if (state?.windowsInRoof?.quantity)
            setWindows([...state?.windowsInRoof?.quantity]);
    }, [state?.windowsInRoof?.quantity]);

    const setWindowsInRoof = (item) => {
        const windowsObj = {
            ...item,
            quantity: windows,
            title: item.id === 1 ? "Прямоугольные окна" : "Круглые окна",
        };
        dispatch(setWindowsInRoofAction(windowsObj));
        navigate("/fifth");
    };

    const types = [
        {
            id: 1,
            img: "img/rectangle-window.png",
            title: "Прямоугольные окна",
            descr: "1400*2000мм",
        },
        {
            id: 2,
            img: "img/circle-window.png",
            title: "Круглые окна",
            descr: "D1200 мм",
        },
    ];

    const currentType = item.id === 1 ? types[0] : types[1];
    const [activePopup, setActivePopup] = React.useState(false);
    const [windows, setWindows] = React.useState([]);
    // Костыль
    const arr = [];
    for (let i = 1; i <= item.quantity; i++) {
        arr.push(i);
    }

    const isInWindow = (index) => {
        // if (state?.windowsInRoof?.quantity) {
        //     const currentWindowSise =
        //         index % 2 === 1
        //             ? `Л${Math.round(index / 2)}`
        //             : `П${Math.round(index / 2)}`;
        //     return state?.windowsInRoof?.quantity.includes(currentWindowSise) && state.windowsInRoof.id === item.id;
        // } else {
        //     const currentWindowSise =
        //     index % 2 === 1
        //         ? `Л${Math.round(index / 2)}`
        //         : `П${Math.round(index / 2)}`;
        // return windows.includes(currentWindowSise);
        // }
        const currentWindowSise =
            index % 2 === 1
                ? `Л${Math.round(index / 2)}`
                : `П${Math.round(index / 2)}`;
        return windows.includes(currentWindowSise);
    };

    const setActiveWindows = (index) => {
        const currentWindowSise =
            index % 2 === 1
                ? `Л${Math.round(index / 2)}`
                : `П${Math.round(index / 2)}`;
        if (windows.includes(currentWindowSise)) {
            setWindows(windows.filter((item) => item !== currentWindowSise));
        } else setWindows([...windows, currentWindowSise]);
    };

    return (
        <CSSTransition
            in={loaded}
            timeout={1000}
            classNames="page"
            unmountOnExit
        >
            <div
                key={item.id}
                className={
                    state?.windowsInRoof?.id === item.id
                        ? "item be-relative active-border"
                        : "item be-relative"
                }
                style={{ textAlign: "center" }}
            >
                <img
                    src={currentType.img}
                    alt=""
                    style={{ marginBottom: 20 }}
                />
                <div>
                    <p style={{ fontWeight: 500, marginBottom: 20 }}>
                        {currentType.title}
                    </p>
                    <p style={{ fontWeight: 400, marginBottom: 20 }}>
                        {currentType.descr}
                    </p>
                    <div className="window">
                        {arr.map((index) => (
                            <button
                                onClick={() => setActiveWindows(index)}
                                key={index}
                                style={{
                                    borderRadius:
                                        currentType.id === 2 ? "50%" : 0,
                                }}
                                className={
                                    !isInWindow(index)
                                        ? "window__btn"
                                        : "window__btn window__btn_active"
                                }
                            >
                                {index % 2 === 1
                                    ? `Л${Math.round(index / 2)}`
                                    : `П${Math.round(index / 2)}`}
                            </button>
                        ))}
                        <p style={{ textAlign: "center", marginTop: 0 }}>
                            Вход
                        </p>
                    </div>
                    {windows.length === 0 ? (
                        <p style={{ marginBottom: 20 }}>{item.price} руб. шт</p>
                    ) : (
                        <p style={{ marginBottom: 20 }}>
                            Итого: {windows.length * item.price} руб.
                        </p>
                    )}
                </div>
                <button
                    className="btn-choose"
                    onClick={() => setWindowsInRoof(item)}
                >
                    Выбрать
                </button>
                <button
                    className="btn-select"
                    onClick={() => setActivePopup(true)}
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
        </CSSTransition>
    );
};
