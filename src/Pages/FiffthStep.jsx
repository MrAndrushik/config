import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Bottomblock from "../Components/Bottomblock";
import Configuration from "../Components/Configuration";
import { FifthItem } from "../Components/FifthItem";
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
                <h2 className="caption">5. Выберите окна в стене</h2>
                <div className="wrapper">
                    {filteredData?.types.map((item) => (
                        <FifthItem item={item} key={item.id} />
                    ))}
                    <Configuration completed={"90%"} />
                </div>
            </div>
            <Bottomblock back="/fourth" skip="/sixth" />
        </div>
    );
};

export default FourthStep;
