import { useState } from "react";
const NewTest = ()=>{


    let currentCount = 0;
    const [counter, incrementValue] = useState(currentCount);
    const incrementCounter = () => {
      incrementValue(counter + 1);
    };
    return (
    <div onMouseEnter={incrementCounter}>
<h4> {counter}</h4>
    </div>
)
};

export default NewTest;