import { Route, Routes } from "react-router";
// import Topblock from "./Components/Topblock";
import FiffthStep from "./Pages/FiffthStep";
import FirstStep from "./Pages/FirstStep";
import FourthStep from "./Pages/FourthStep";
import NotAllowed from "./Pages/NotAllowed";
import SecondStep from "./Pages/SecondStep";
import SixthStep from "./Pages/SixthStep";
import ThirdStep from "./Pages/ThirdStep";

function App() {
    const windowInnerWidth = window.innerWidth;
    // const routes = [
    //     { path: "/", Component: FirstStep },
    //     { path: "/second", Component: SecondStep },
    //     { path: "/third", Component: ThirdStep },
    //     { path: "/fourth", Component: FourthStep },
    //     { path: "/fifth", Component: FiffthStep },
    //     { path: "/sixth", Component: SixthStep },
    // ];

    return (
        <div className="App container">
            {windowInnerWidth <= 1200 ? (
                <NotAllowed />
            ) : (
                <Routes>
                    <Route path="/" element={<FirstStep />} />
                    <Route path="/second" element={<SecondStep />} />
                    <Route path="/third" element={<ThirdStep />} />
                    <Route path="/fourth" element={<FourthStep />} />
                    <Route path="/fifth" element={<FiffthStep />} />
                    <Route path="/sixth" element={<SixthStep />} />
                    {/* {routes.map(({ path, Component }) => (
                        <Route key={path} path={path} element={<Component />} />
                    ))} */}
                </Routes>
            )}
        </div>
    );
}

export default App;
