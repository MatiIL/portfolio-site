import { createContext, 
    useContext, 
    useState } from 'react';

export const AnimationContext = createContext(true);

export const useAnimateContext = () => {
    return useContext(AnimationContext);
};

const AnimationContextProvier = ({ children }) => {
    const [headerVisibility, setHeaderVisibility] = useState(false);
    const [fileName, setFileName] = useState("Mati Breski, Fullstack Web Developer");

    return (
        <AnimationContext.Provider
        value={{
            headerVisibility,
            setHeaderVisibility,
            fileName,
            setFileName
         }}
        >
            {children}
        </AnimationContext.Provider>
    )

}

export default AnimationContextProvier;