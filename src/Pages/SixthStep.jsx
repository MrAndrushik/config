import React from "react";
import ScrollToTop from "../Components/ScrollToTop";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const SixthStep = () => {
    const state = useSelector((state) => state);
    const navigate = useNavigate();
    React.useEffect(() => {
        if (state === null) return navigate("/");
    });
    let [counter, setCounter] = React.useState(1);
    const getTotal = () => {
        if (state) {
            let defaultValue = state?.price + state?.colors[0].price;
            if (state.winterPrice) {
                defaultValue += state.winterPrice;
            }
            if (state.curtains) {
                defaultValue += state.curtains.price;
            }
            if (state.windowsInRoof) {
                defaultValue +=
                    state.windowsInRoof.price *
                    state.windowsInRoof.quantity.length;
            }
            if (state.windowsInWall) {
                defaultValue +=
                    state.windowsInWall.price *
                    state.windowsInWall.quantity.length;
            }
            return defaultValue;
        } else return "";
    };
    console.log(state);
    return (
        <div className="total">
            <ScrollToTop />
            <h2 className="total__title">Ваша конфигурация</h2>
            <p className="total__module">Модуль: 6х4</p>
            <div className="total__wrapper">
                <div className="total__block">
                    <div className="total__item">
                        <div className="total__content">
                            <div>
                                <p
                                    className="total__text"
                                    style={{ marginBottom: 9 }}
                                >
                                    {state?.module}
                                </p>
                                <p className="total__text">
                                    Тент {state?.awning}
                                </p>
                            </div>
                            <div style={{ display: "flex", alignItems: "end" }}>
                                <p className="total__value">
                                    {state?.price} руб.
                                </p>
                                <button className="total__edit">
                                    <img src="img/edit.svg" alt="" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="total__item">
                        <div className="total__content">
                            <div>
                                <p className="total__text">Цвет: </p>
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "end",
                                }}
                            >
                                <p className="total__value">
                                    {state?.colors[0].title}
                                </p>
                                <button className="total__edit">
                                    <img src="img/edit.svg" alt="" />
                                </button>
                            </div>
                        </div>
                    </div>
                    {state?.winterPrice && (
                        <div className="total__item">
                            <div className="total__content">
                                <div>
                                    <p className="total__text">
                                        Зимний комплект
                                    </p>
                                </div>
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "end",
                                    }}
                                >
                                    <p className="total__value">
                                        {state?.winterPrice} руб.
                                    </p>
                                    <button className="total__edit">
                                        <img src="img/edit.svg" alt="" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                    {state?.curtains && (
                        <div className="total__item">
                            <div className="total__content">
                                <div>
                                    <p className="total__text">
                                        Торцевые шторы
                                    </p>
                                    <p className="total__descr">
                                        Шторы из прозрачного ПВХ
                                    </p>
                                </div>
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "end",
                                    }}
                                >
                                    <p className="total__value">
                                        {state?.curtains.price}
                                    </p>
                                    <button className="total__edit">
                                        <img src="img/edit.svg" alt="" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                    {state?.windowsInRoof && (
                        <div className="total__item">
                            <div className="total__content">
                                <div>
                                    <p className="total__text">Окна в кровле</p>
                                    <p className="total__descr">
                                        прямоугольные 1400*2000мм., 4 шт.
                                    </p>
                                </div>
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "end",
                                    }}
                                >
                                    <p className="total__value">
                                        {state?.windowsInRoof.price} руб.
                                    </p>
                                    <button className="total__edit">
                                        <img src="img/edit.svg" alt="" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                    {state?.windowsInWall && (
                        <div className="total__item">
                            <div className="total__content">
                                <div>
                                    <p className="total__text">Окна в стене</p>
                                    <p className="total__descr">
                                        прямоугольные 1400*2000мм., 4 шт.
                                    </p>
                                </div>
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "end",
                                    }}
                                >
                                    <p className="total__value">
                                        {state?.windowsInWall.price} руб.
                                    </p>
                                    <button className="total__edit">
                                        <img src="img/edit.svg" alt="" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                    <div className="total__module-block total__module-block-price">
                        <p>Общая стоимость вашего модуля</p>
                        <p className="total__module-price">{getTotal()} руб.</p>
                    </div>
                    <div className="total__module-block total__module-block-quantity">
                        <p>Количество модулей:</p>
                        <div className="d-flex">
                            <p className="total__module-price">{counter} шт.</p>
                            <button
                                className="total__btn"
                                onClick={() => {
                                    if (counter > 1) setCounter(--counter);
                                }}
                            >
                                -
                            </button>
                            <button
                                className="total__btn"
                                onClick={() => setCounter(++counter)}
                            >
                                +
                            </button>
                        </div>
                    </div>
                    <div className="total__module-block total__module-block-allprice">
                        <p>Итоговая стоимость</p>
                        <p className="total__module-price total__price">
                            {getTotal() * counter} руб.
                        </p>
                    </div>
                    <button className="total__order">Оформить заказ</button>
                    <button className="total__add-module">
                        Добавить еще модуль
                    </button>
                </div>
                <div className="total__block">
                    <img
                        src={state?.colors[0].img}
                        style={{ width: "100%" }}
                        alt=""
                    />
                    <div className="total__links">
                        <button className="total__share">Поделиться</button>
                        <button
                            className="total__print"
                            onClick={() => window.print()}
                        >
                            Распечатать
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SixthStep;
