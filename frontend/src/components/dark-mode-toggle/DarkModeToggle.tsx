import {Button, useComputedColorScheme, useMantineColorScheme} from '@mantine/core';
import {useState} from 'react';
import {IconMoon, IconSun} from '@tabler/icons-react';

export default function DarkModeToggle() {
    const {setColorScheme} = useMantineColorScheme();
    const computedColorScheme = useComputedColorScheme('light');
    const [icon, setIcon] = useState(<IconMoon/>);

    const toggleColorScheme = () => {
        const newColorScheme = computedColorScheme === 'dark' ? 'light' : 'dark';
        setColorScheme(newColorScheme);
        setIcon(newColorScheme === 'light' ? <IconMoon/> : <IconSun/>);
    };

    return (
        <Button onClick={toggleColorScheme}>{icon}</Button>
    );
}