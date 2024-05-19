import {Button, useComputedColorScheme, useMantineColorScheme} from '@mantine/core';
import {useState} from 'react';
import MoonIcon from "../moon-icon/MoonIcon";
import SunIcon from "../sun-icon/SunIcon";

export default function DarkModeToggle() {
    const {setColorScheme} = useMantineColorScheme();
    const computedColorScheme = useComputedColorScheme('light');
    const [icon, setIcon] = useState(computedColorScheme === 'light' ? <SunIcon/> : <MoonIcon/>);

    const toggleColorScheme = () => {
        setColorScheme(computedColorScheme === 'dark' ? 'light' : 'dark');
        setIcon(computedColorScheme === 'light' ? <MoonIcon/> : <SunIcon/>);
    };

    return (
        <Button onClick={toggleColorScheme}>{icon}</Button>
    );
}