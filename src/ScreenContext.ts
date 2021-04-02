import { createContext, useContext } from 'react';

export enum ScreenType {
    home = 'home',
    about = 'about',
    portfolio = 'portfolio',
    contact = 'contact'
}

export type ScreenContextType = {
    screen: ScreenType;
    setScreen: (screen: ScreenType) => void
}


export const ScreenContext = createContext<ScreenContextType>({ screen: ScreenType.home, setScreen: screen => console.warn('No screen is provided') });
export const useScreen = () => useContext(ScreenContext);