'use client';
import { useTransition } from "react";
import { createPaymentMethodSchema, paymentMethodSchema } from "@/lib/validators"; 
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldLabel,
  FieldTitle,
} from "@/components/ui/field";
import {Controller, useForm} from "react-hook-form";
import { ArrowRight, Loader } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RadioGroup,RadioGroupItem } from "@/components/ui/radio-group";
import { PaypalIcon } from "@/components/icons/il-paypal";
import { FaBitcoin } from "react-icons/fa6";
import { VisaIcon } from "@/components/icons/logos-visa";
import { CreditCardIcon } from "@/components/icons/noto-credit-card";
import { CcDiscoverIcon } from "@/components/icons/fa7-brands-cc-discover";
import { MaestroIcon } from "@/components/icons/logos-maestro";
const PaymentMethodForm = ({
    preferredPaymentMethod,
    paymentMethods,
    defaultPaymentMethod,
}: {
        preferredPaymentMethod: string | null;
        paymentMethods: string[];
        defaultPaymentMethod: string;
    }) =>{

        const formSchema = createPaymentMethodSchema(paymentMethods);
        const form = useForm<z.infer<typeof paymentMethodSchema>>({
            resolver: zodResolver(formSchema),
            defaultValues:{
                type: preferredPaymentMethod || defaultPaymentMethod
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
                    <Field className="gap-3" data-invalid={fieldState.invalid}>
                    <FieldTitle id={`${field.name}-label`}>Choose a payment method</FieldTitle>
                    <RadioGroup
                        value={field.value}
                        onValueChange={field.onChange}
                        aria-labelledby={`${field.name}-label`}
                        className="flex max-w-sm flex-col gap-2"
                        
                    >
                        {paymentMethods.map((paymentMethod) => {
                            const id = `payment-method-${paymentMethod}`;

                            return (
                                <FieldLabel
                                    key={paymentMethod}
                                    className="w-full cursor-pointer normal-case has-[>[data-slot=field]]:rounded-full has-[>[data-slot=field]]:has-focus-visible:ring-2 has-[>[data-slot=field]]:has-focus-visible:ring-ring/30"
                                >
                                    <Field
                                        orientation="horizontal"
                                        className="w-full items-center rounded-full border border-input p-3"
                                    >
                                        <FieldContent className="flex flex-row">
                                            <FieldTitle className="normal-case">
                                                {paymentMethod}
                                            </FieldTitle>
                                            <FieldDescription>
                                                {
                                                    paymentMethod === 'Paypal'?
                                                        <PaypalIcon className="h-19 w-19 fill-current text-blue-600" />: ''
                                                }
                                                {
                                                    paymentMethod === 'Stripe' ?
                                                        <p className="flex flex-row">
                                                        <VisaIcon className="pr-2 h-19 w-19 fill-current text-blue-700" />
                                                        <CcDiscoverIcon className="h-18 w-18 fill-current text-white-200 pr-2"  />
                                                        <MaestroIcon className="h-19 w-19 fill-current text-white-200  pr-2" /> 
                                                        </p>
                                                        : ''
                                                }
                                                {
                                                    paymentMethod === 'Cryptocurrency' ?
                                                    <FaBitcoin className="h-16 w-16 text-[#F7931A]" /> : ''
                                                }
                                            </FieldDescription>
                                        </FieldContent>
                                        <RadioGroupItem id={id} value={paymentMethod} />
                                    </Field>
                                </FieldLabel>
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