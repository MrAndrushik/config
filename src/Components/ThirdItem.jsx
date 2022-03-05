import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { setCurtainsAction } from "../store/firstReducer";

export const ThirdItem = ({ item }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const state = useSelector((state) => state);

    const setCurtains = (item) => {
        const curtainsObj = { ...item, title: currentType.title };
        dispatch(setCurtainsAction(curtainsObj));
        navigate("/fourth");
    };

    const types = [
        {
            id: 1,
            img: "img/first-curtains.png",
            title: "Шторы син.",
            descr: "Tорцевые шторы из синтетической ткани (комплект 2шт.)",
        },
        {
            id: 2,
            img: "img/second-curtains.png",
            title: "Шторы из ПВХ",
            descr: "Tорцевые шторы из синтетической ткани (комплект 2шт.)",
        },
    ];

    const currentType = item.id === 1 ? types[0] : types[1];
    const [activePopup, setActivePopup] = React.useState(false);

    return (
        <div
            key={item.id}
            className={
                state?.curtains?.id === item.id
                    ? "item be-relative active-border"
                    : "item be-relative"
            }
            style={{ textAlign: "center" }}
        >
            <img src={currentType.img} alt="" style={{ marginBottom: 20 }} />
            <div>
                <p style={{ fontWeight: 500, marginBottom: 20 }}>
                    {currentType.title}
                </p>
                <p style={{ fontWeight: 400, marginBottom: 20 }}>
                    {currentType.descr}
                </p>
                <p style={{ marginBottom: 20 }}>
                    {item.price}
                    руб
                </p>
            </div>
            <button className="btn-choose" onClick={() => setCurtains(item)}>
                Выбрать
            </button>
            <button className="btn-select" onClick={() => setActivePopup(true)}>
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
    );
};
