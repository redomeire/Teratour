import React, { createContext, SetStateAction, useState } from "react";

type Ctx = {
    tab: string,
    setTab: React.Dispatch<SetStateAction<string>>,
}

export const ExploreContext = createContext<Ctx>({
    tab: '',
    setTab: () => {},
});

const ExploreCtx = ({ children }: { children: React.ReactNode }) => {
    const [tab, setTab] = useState('')
    
    return(
        <ExploreContext.Provider value={{ tab, setTab }}>
            {children}
        </ExploreContext.Provider>
    )
}

export default ExploreCtx
