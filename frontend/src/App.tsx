import {useState} from "react";
import {AppShell, Group, MantineProvider,} from '@mantine/core';
import '@mantine/core/styles.css';
import HomePage from "./pages/HomePage";
import DarkModeToggle from "./components/dark-mode-toggle/DarkModeToggle";

export default function App() {
    const [headerHeight] = useState<number>(60);

    return (
        <MantineProvider>
            <AppShell
                header={{height: headerHeight}}
                padding="md"
            >
                <AppShell.Header>
                    <Group h="100%" px="md">
                        <DarkModeToggle/>
                    </Group>
                </AppShell.Header>
                <AppShell.Main>
                    <HomePage headerHeight={headerHeight}/>
                </AppShell.Main>
            </AppShell>
        </MantineProvider>
    );
}