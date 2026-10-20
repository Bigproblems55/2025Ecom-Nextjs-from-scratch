'use client';
import { ShippingAddress } from "@/types";
import { useRouter } from 'next/navigation';
import { toast } from "sonner";
import { useTransition } from "react";
import { shippingAddressSchema } from "@/lib/validators";
import {zodResolver} from "@hookform/resolvers/zod"
import {Controller, useForm} from "react-hook-form";
import {z} from 'zod';
import { shippingAddressDefaultValues } from "@/lib/constants"; 
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input";
const ShippingAddressForm = ({address}:{address: ShippingAddress}) => {
    const router = useRouter();
    const onSubmit = () =>{
        return;
    }
    const form = useForm<z.infer<typeof shippingAddressSchema>> ({
        resolver: zodResolver(shippingAddressSchema),
        defaultValues: address || shippingAddressDefaultValues,
    });
    const  [isPending, action={form},startTransition] = useTransition();

    return <>
        <div className="max-w-md max-auto space-y-4">
            <h1 className="h2-bold mt-4">Shipping Address</h1>
            <p className="text-sm text-muted-foreground">
                Please enter an address to ship to 
            </p>
            <form method="post" className="space-y-4"
            onSubmit={form.handleSubmit(onSubmit)}>
                <div className="flex flex-col md:flex-row gap-5">
                <Controller
                control={form.control}
                name="fullName"
                render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={field.name}>Full Name</FieldLabel>
                    <Input
                        {...field}
                        id={field.name}
                        placeholder="Enter full name"
                        autoComplete="name"
                        aria-invalid={fieldState.invalid}
                    />
                    {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                    )}
                    </Field>
                )}
                />
                </div>
            </form>
        </div>
    </>
}
 
export default ShippingAddressForm;