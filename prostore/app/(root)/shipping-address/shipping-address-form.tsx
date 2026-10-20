'use client';
import { ShippingAddress } from "@/types";
import { useRouter } from 'next/navigation';
import { toast } from "sonner";
import { useTransition } from "react";
import { shippingAddressSchema } from "@/lib/validators";
import {zodResolver} from "@hookform/resolvers/zod"
import {Controller, useForm, SubmitHandler} from "react-hook-form";
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
import { ArrowRight, Loader } from "lucide-react";
import { Button } from "@/components/ui/button";
import { updateUserAddress } from "@/lib/actions/user.actions";
const ShippingAddressForm = ({address}:{address: ShippingAddress}) => {
    const router = useRouter();
    const form = useForm<z.infer<typeof shippingAddressSchema>> ({
        resolver: zodResolver(shippingAddressSchema),
        defaultValues: address || shippingAddressDefaultValues,
    });
    const  [isPending,startTransition] = useTransition();

    const onSubmit:SubmitHandler<z.infer<typeof shippingAddressSchema>> = async(values) =>{
        startTransition(async () =>{
            const res = await updateUserAddress(values);
            if(!res.success){
                toast.success(res.message);
                return;
            }
            router.push('/payment-method');
        })
    }

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
                <div className="flex flex-col md:flex-row gap-5">
                <Controller
                control={form.control}
                name="streetAddress"
                render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={field.name}>Street Address</FieldLabel>
                    <Input
                        {...field}
                        id={field.name}
                        placeholder="Enter Street Address"
                        autoComplete="streetAddress"
                        aria-invalid={fieldState.invalid}
                    />
                    {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                    )}
                    </Field>
                )}
                />
                </div>
                <div className="flex flex-col md:flex-row gap-5">
                <Controller
                control={form.control}
                name="city"
                render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={field.name}>City</FieldLabel>
                    <Input
                        {...field}
                        id={field.name}
                        placeholder="Enter City"
                        autoComplete="city"
                        aria-invalid={fieldState.invalid}
                    />
                    {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                    )}
                    </Field>
                )}
                />
                </div>
                <div className="flex flex-col md:flex-row gap-5">
                <Controller
                control={form.control}
                name="postalCode"
                render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={field.name}>Postal Code</FieldLabel>
                    <Input
                        {...field}
                        id={field.name}
                        placeholder="Enter Postal Code"
                        autoComplete="postalCode"
                        aria-invalid={fieldState.invalid}
                    />
                    {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                    )}
                    </Field>
                )}
                />
                </div>
                <div className="flex flex-col md:flex-row gap-5">
                <Controller
                control={form.control}
                name="country"
                render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={field.name}>Country</FieldLabel>
                    <Input
                        {...field}
                        id={field.name}
                        placeholder="Enter Country"
                        autoComplete="country"
                        aria-invalid={fieldState.invalid}
                    />
                    {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                    )}
                    </Field>
                )}
                />
                </div>
                <div className="flex gap-2">
                    <Button aria-label='submit' type='submit' disabled={isPending}>
                        {isPending ? (<Loader className='w-4 h-4 animate-spin' />) 
                        : (<ArrowRight className="w-4 h-4" />)}{' '}
                        Continue
                    </Button>
                </div>
            </form>
        </div>
    </>
}
 
export default ShippingAddressForm;