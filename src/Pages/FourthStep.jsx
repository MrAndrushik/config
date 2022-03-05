import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Bottomblock from "../Components/Bottomblock";
import Configuration from "../Components/Configuration";
import { FourthItem } from "../Components/FourthItem";
import ScrollToTop from "../Components/ScrollToTop";
import { step4 } from "../data/step4";

const FourthStep = () => {
    const state = useSelector((state) => state);
    const navigate = useNavigate();
    React.useEffect(() => {
        if (state === null) return navigate("/");
    });

    const module = useSelector((state) => state?.module);
    const filteredData = step4.filter((item) => item?.module === module)[0];

    return (
        <div>
            <ScrollToTop />
            <div className="second">
                <h2 className="caption">4. Выберите окна в кровле</h2>
                <div className="wrapper">
                    {filteredData?.types.map((item) => (
                        <FourthItem item={item} key={item.id} />
                    ))}
                    <Configuration completed={"70%"} />
                </div>
            </div>
            <Bottomblock back="/third" skip="/fifth" />
        </div>
    );
};

export default FourthStep;
