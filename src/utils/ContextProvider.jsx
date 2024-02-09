import { React, createContext, useState } from "react";

export const MyContext = createContext()


export const MyProvider = ({ children }) => {
    const [test, setTest] = useState("hello kawtar")
    const [test2, setTest2] = useState("hello Meryem")

    return (
        <>
            <MyContext.Provider value={[test, setTest , test2 , setTest2]}>
                {children}
            </MyContext.Provider>
        </>
    )

}