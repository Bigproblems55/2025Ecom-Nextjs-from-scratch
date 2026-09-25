import Link from "next/link";
import {auth } from "@/auth";
import { Button } from "@/components/ui/button";
import { DropdownMenu, 
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { UserIcon } from "lucide-react";

const UserButton = async() => {
    const session = await auth();

    if(!session){
        return(
            <Button render={
                <Link href='/sign-in'>
                <UserIcon /> Sign In
            </Link>
            }>
                
            </Button>
            
        );
    }
    const firstInitial = session.user?.name?.charAt(0).toUpperCase() ?? 'U';
    return <div className="flex gap-2 items-center">
        <DropdownMenu>
            <DropdownMenuTrigger render={
                <Button variant='ghost' className='relative w-8 h-8 
                    rounded-full ml-2 flex items-center justify-center bg-gray-200'>
                        {firstInitial}
                </Button>
            }>

            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuGroup>
                    <DropdownMenuLabel>
                        <div className="flex flex-col space-y-1">
                            <div className="text-sm font-medium leading-none">
                                {session.user?.name}
                            </div>
                        </div>
                    </DropdownMenuLabel>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    </div>;
}
 
export default UserButton;