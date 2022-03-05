import React from "react";
import { useSelector } from "react-redux";

const Configuration = ({ completed, visible }) => {
    const store = useSelector((state) => state);
    const getTotal = () => {
        if (store) {
            let defaultValue = store?.price + store?.colors[0].price;
            if (store.winterPrice) {
                defaultValue += store.winterPrice;
            }
            if (store.curtains) {
                defaultValue += store.curtains.price;
            }
            if (store.windowsInRoof) {
                defaultValue +=
                    store.windowsInRoof.price *
                    store.windowsInRoof.quantity.length;
            }
            if (store.windowsInWall) {
                defaultValue +=
                    store.windowsInWall.price *
                    store.windowsInWall.quantity.length;
            }
            return defaultValue;
        } else return "";
    };
    return (
        <div className="configuration">
            <div className="configuration__item">
                <h2 className="configuration__title">Конфигурация</h2>
                <p className="configuration__module">Модуль: {store?.module}</p>
                <p className="configuration__text">
                    Выбраны не все обязательные компоненты
                </p>
                <div className="configuration__completed be-relative">
                    <div
                        className="configuration__completed-line"
                        style={{ width: completed }}
                    ></div>
                </div>
                <div className="configuration__img-block">
                    <img
                        className="configuration__img"
                        src={store?.colors[0].img}
                        alt=""
                    />
                </div>
                <div className="configuration__grid">
                    <div
                        className="configuration__row"
                        style={{ marginBottom: 0 }}
                    >
                        <h3 className="configuration__caption">Каркас:</h3>
                        <p className="configuration__value">{store?.module}</p>
                    </div>
                    <div className="configuration__row">
                        <h3 className="configuration__caption">Тент:</h3>
                        <p className="configuration__value">{store?.awning}</p>
                        <p className="configuration__price">
                            {store?.price} руб.
                        </p>
                    </div>
                    <div className="configuration__row">
                        <h3 className="configuration__caption">Цвет:</h3>
                        <p className="configuration__value">
                            {store?.colors[0].title}
                        </p>
                        <p className="configuration__price">
                            {store?.colors[0].price} руб.
                        </p>
                    </div>
                    {store?.winterPrice && (
                        <div className="configuration__row">
                            <h3 className="configuration__caption">
                                Зимний модуль:
                            </h3>
                            <p className="configuration__value"></p>
                            <p className="configuration__price">
                                {store?.winterPrice} руб.
                            </p>
                        </div>
                    )}
                    {store?.curtains && (
                        <div className="configuration__row">
                            <h3 className="configuration__caption">
                                {store?.curtains.title}
                            </h3>
                            <p className="configuration__value"></p>
                            <p className="configuration__price">
                                {store?.curtains.price} руб.
                            </p>
                        </div>
                    )}
                    {store?.windowsInRoof && (
                        <div className="configuration__row">
                            <h3 className="configuration__caption">
                                Окна в кровле:
                            </h3>
                            <p className="configuration__value"></p>
                            <p className="configuration__price">
                                {store?.windowsInRoof.price *
                                    store?.windowsInRoof.quantity.length}{" "}
                                руб.
                            </p>
                        </div>
                    )}
                    {store?.windowsInWall && (
                        <div className="configuration__row">
                            <h3 className="configuration__caption">
                                Окна в стене:
                            </h3>
                            <p className="configuration__value"></p>
                            <p className="configuration__price">
                                {store?.windowsInWall.price *
                                    store?.windowsInWall.quantity.length}{" "}
                                руб.
                            </p>
                        </div>
                    )}
                </div>
                <div className="configuration__total-block">
                    <p>Итоговая стоимость: </p>
                    <p className="configuration__total">{getTotal()} руб.</p>
                </div>
            </div>
        </div>
    );
};

export default Configuration;
