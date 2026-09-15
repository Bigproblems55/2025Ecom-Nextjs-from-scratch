'use client'
import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import {SunIcon,MoonIcon,SunMoon} from "lucide-react";
import {Button} from "@/components/ui/button"
import {DropdownMenu, 
    DropdownMenuTrigger,
    DropdownMenuGroup,
    DropdownMenuLabel,
    DropdownMenuCheckboxItem,
    DropdownMenuSeparator,
    DropdownMenuItem,
    DropdownMenuContent,
    } from "@/components/ui/dropdown-menu"
const ModeToggle = () => {
    const { theme, resolvedTheme, setTheme } = useTheme();
    const mounted = useSyncExternalStore(
        () => () => {},
        () => true,
        () => false,
    );
    return  <DropdownMenu>
        <DropdownMenuTrigger
        render={<Button variant="ghost" size="icon" 
            className="focus-visible:ring-0 
            focus-visible:ring-offset-0" />}
        >
        {!mounted ? (
            <SunMoon />
        ) : theme === "system" ? (
            <SunMoon />
        ) : resolvedTheme === "dark" ? (
            <MoonIcon />
        ) : (
            <SunIcon />
        )}
        </DropdownMenuTrigger>
        <DropdownMenuContent >
        <DropdownMenuGroup>
            <DropdownMenuLabel>Appearance</DropdownMenuLabel>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem checked={theme === "light"} onClick={() => setTheme("light")}>
            <SunIcon />
            Light
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem onClick={() => setTheme("dark")}>
            <MoonIcon />
            Dark
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem onClick={() => setTheme("system")}>
            <SunMoon />
            System
        </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
    </DropdownMenu> ;
}
 
export default ModeToggle;