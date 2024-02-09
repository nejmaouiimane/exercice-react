import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MyContext } from '../../../utils/ContextProvider';

export const AboutSection = () => {
let navigate = useNavigate()

const [test, setTest , test2 , setTest2] = useContext(MyContext)

    return (
        <>

<button onClick={navigate("/")}></button>
            <div>{test}{test2}</div>
        </>
    );
};

