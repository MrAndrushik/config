import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { setWinterModuleAction } from "../store/firstReducer";

const SecondCard = ({ item }) => {
    const imgSrc = useSelector((state) => state.colors.map((item) => item.img));
    const state = useSelector((state) => state);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const setWinterModule = (item) => {
        dispatch(setWinterModuleAction(item.winterPrice));
        navigate("/third");
    };

    return (
        <div
            className={
                state?.winterPrice === item.winterPrice
                    ? "first__item be-relative active-border"
                    : "first__item be-relative"
            }
        >
            <img src={imgSrc} alt="" />
            <div className="content">
                <p>Модель:</p>
                <p className="module">{item.module}</p>
                <p>Цена:</p>
                <p className="price">{item.winterPrice} руб</p>
            </div>
            <button
                className="btn-choose"
                onClick={() => setWinterModule(item)}
            >
                Выбрать
            </button>
        </div>
    );
};

export default SecondCard;
