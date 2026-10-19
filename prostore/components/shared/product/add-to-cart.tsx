'use client';
import type { CartItem, Cart } from "@/types";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { addItemToCart, removeItemFromCart } from "@/lib/actions/cart.actions";
import { Plus, Minus } from "lucide-react";

const AddToCart = ({ cart, item }: {cart?: Cart, item: CartItem }) => {
    const router = useRouter();
    
    const handleAddToCart = async () => {
        const res = await addItemToCart(item);

        if (!res.success) {
            toast.error(res.message);
            return;
        }

        toast.success(`${item.name} added to cart successfully`, {
            description: res.message,
            action: {
                label: "Go To Cart",
                onClick: () => router.push("/cart"),
            },
        });
        router.refresh();
    };

    // Handle remove from cart
    const handleRemoveFromCart = async () =>{
        const res = await removeItemFromCart(item.productId);
        if (!res.success) {
            toast.error(res.message);
            return;
        }

        toast.success(res.message);
        router.refresh();
    }

    // Check if item is in cart
    const existItem = cart && cart.items.find((x) => x.productId === item.productId);
    return existItem ? (
        <div>
            <Button type='button' variant='outline' onClick={handleRemoveFromCart}>
                <Minus className='h-4 w-4' />
            </Button>
            <span className='px-2'>{existItem.qty}</span>
            <Button type='button' variant='outline' onClick={handleAddToCart}>
                <Plus className='h-4 w-4' />
            </Button>
        </div>
    ): (
    <Button className="w-full" onClick={handleAddToCart}><Plus /> Add to Cart</Button>);
}
 
export default AddToCart;