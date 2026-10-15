'use client';
import type { CartItem } from "@/types";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { addItemToCart } from "@/lib/actions/cart.actions";
import { Plus } from "lucide-react";

const AddToCart = ({ item }: { item: CartItem }) => {
    const router = useRouter();
    
    const handleAddToCart = async () => {
        const result = await addItemToCart(item);

        if (!result.success) {
            toast.error(result.message);
            return;
        }

        toast.success(`${item.name} added to cart successfully`, {
            action: {
                label: "Go To Cart",
                onClick: () => router.push("/cart"),
            },
        });
    };

    return <Button className="w-full" onClick={handleAddToCart}><Plus /> Add to Cart</Button>;
}
 
export default AddToCart;