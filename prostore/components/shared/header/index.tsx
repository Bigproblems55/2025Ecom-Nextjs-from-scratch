import {ShoppingCart, UserIcon } from 'lucide-react'
import Image from 'next/image';
import Link from 'next/link';
import {Button} from '@/components/ui/button';
import { APP_NAME } from '@/lib/constants';
import ModeToggle from './mode-toggle';
const Header = () => {
    return  <header className='w-full border-b' >
        <div className='wrapper flex-between'>
            <div className='flex-start'>
                <Link href='/' className='flex-start'>
                    <Image src='/images/logo.svg' alt={`${APP_NAME} logo`} 
                        height={48} 
                        width={48} 
                        priority={true} // Because main image and warning if you don't
                        />
                        <span className="hidden lg:block font-bold text-2xl ml-3">
                            {APP_NAME}
                        </span>
                </Link>
            </div>
            <div className='flex gap-2 items-center space-x-2'>
                <ModeToggle />
                <Button
                nativeButton={false}
                    variant="ghost"
                    size="lg"
                    render={<Link href="/cart" aria-label="Shopping cart" />}
                    >
                    <ShoppingCart /> Cart
                </Button>
                <Button
                nativeButton={false}
                    size="lg"
                    render={<Link href="/sign-in" aria-label="Sign In" />}
                    >
                    <UserIcon /> Sign In
                </Button>
            </div>
        </div>
    </header>;
};
 
export default Header;