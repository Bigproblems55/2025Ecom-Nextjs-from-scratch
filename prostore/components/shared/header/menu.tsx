import { EllipsisVertical, ShoppingCart, UserIcon } from 'lucide-react';
import ModeToggle from './mode-toggle';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import Link from 'next/link';

const Menu = () => {
  return (
    <div className="flex justify-end gap-3 ">
        <nav className="hidden md:flex w-full max-w-xs gap-1"> 
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
        </nav>
        <nav className='md:hidden'>
            <Sheet>
                <SheetTrigger className="align-middle">
                    <EllipsisVertical />
                </SheetTrigger>
                <SheetContent className="flex flex-col items-start">
                    <SheetTitle>Menu</SheetTitle>
                    <ModeToggle />
                    <Button variant="ghost" size="lg" 
                    render={<Link href="/cart" aria-label="Shopping cart" />} >
                        <ShoppingCart /> Cart
                    </Button>
                    <Button
                nativeButton={false}
                    size="lg"
                    render={<Link href="/sign-in" aria-label="Sign In" />}
                    >
                    <UserIcon /> Sign In
                </Button>
                    <SheetDescription></SheetDescription>    
                </SheetContent>
            </Sheet>
        </nav>
    </div>
  );
}

export default Menu;