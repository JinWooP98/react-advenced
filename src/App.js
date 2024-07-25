import React, { useState } from "react";

import Counter from "./optimizing/components/Counter/Counter";
import Header from "./optimizing/components/Header";
import { log } from "./optimizing/log";
import ConfigureCounter from "./optimizing/components/Counter/ConfigureCounter";

const App = () => {
    log("<App /> rendered");


    const [chosenCount, setChosenCount] = useState(0);

    const setCountHandler = number => {
        setChosenCount(number);
    };

    return (
        <>
            <Header />
            <main>
                <ConfigureCounter onSet={setCountHandler}/>
                {/*만약 Counter가 여러개일 경우 key에 같은 값이 들어가 다른 방법을 사용해야 함*/}
                <Counter key={chosenCount} initialCount={chosenCount} />
            </main>
        </>
    );
};

export default App;
