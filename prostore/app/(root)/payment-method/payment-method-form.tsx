'use client';
import { useTransition } from "react";
import { paymentMethodSchema } from "@/lib/validators"; 
import { zodResolver } from "@hookform/resolvers/zod";
import { DEFAULT_PAYMENT_METHOD, PAYMENT_METHODS } from "@/lib/constants";
import z from "zod";
import {
  Field,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";
import {Controller, useForm} from "react-hook-form";
import { ArrowRight, Loader } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RadioGroup,RadioGroupItem } from "@/components/ui/radio-group";

const PaymentMethodForm = ({
    preferredPaymentMethod} :{
        preferredPaymentMethod: string | null;
    }) =>{

        const form = useForm<z.infer<typeof paymentMethodSchema>>({
            resolver: zodResolver(paymentMethodSchema),
            defaultValues:{
                type: preferredPaymentMethod || DEFAULT_PAYMENT_METHOD
            }
        });
        const [isPending] = useTransition();
        const  onSubmit = () =>{
            return;
        }

    return <>
        <div className="max-w-md max-auto space-y-4">
            <h1 className="h2-bold mt-4">Payment Method</h1>
            <p className="text-sm text-muted-foreground">
                Please select a payment method
            </p>
            <form method="post" className="space-y-4"
            onSubmit={form.handleSubmit(onSubmit)}>
                <div className="flex flex-col md:flex-row gap-5">
                <Controller
                control={form.control}
                name="type"
                render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={field.name}>Type</FieldLabel>
                    <RadioGroup
                        value={field.value}
                        onValueChange={field.onChange}
                        aria-labelledby={field.name}
                        className="flex flex-col gap-2"
                    >
                        {PAYMENT_METHODS.map((paymentMethod) => {
                            const id = `payment-method-${paymentMethod}`;

                            return (
                                <div key={paymentMethod} className="flex items-center gap-3">
                                    <RadioGroupItem id={id} value={paymentMethod} />
                                    <FieldLabel htmlFor={id} className="font-normal">
                                        {paymentMethod}
                                    </FieldLabel>
                                </div>
                            );
                        })}
                    </RadioGroup>
                    {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                    )}
                    </Field>
                )}
                />
                </div>
                <div className="flex flex-col md:flex-row gap-5">
               
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
    </>;
}
 
export default PaymentMethodForm;