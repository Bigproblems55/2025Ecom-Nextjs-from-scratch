// export { cn } from "cn"

import { clsx, type ClassValue } from 'clsx';
import {twMerge } from 'tailwind-merge';
import { ZodError } from 'zod';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Convert prisma object into a regular JS object
export function convertToPlainObject<T>(value: T): T {
    return JSON.parse(JSON.stringify(value));
}

// Format number with deciaml places
export function formatNumberWithDecimal(num: number): string{
  const [int,decimal] = num.toString().split('.');
  return decimal ? `${int}.${decimal.padEnd(2, '0')}` : `${int}.00`;
}

// Format Errors
function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

export function formatError(error: unknown): string {
  try{
    if (error instanceof ZodError) {
    return error.issues
      .map((issue) => `${issue.path.join('.') || 'Form'}: ${issue.message}`)
      .join('. ');
  }else
  if (
    isRecord(error) &&
    error.name === 'PrismaClientKnownRequestError' &&
    error.code === 'P2002'
  ) {
    // Handle prisma herror
    const meta = isRecord(error.meta) ? error.meta : undefined;
    const target = meta?.target;
    const field =
      Array.isArray(target) && typeof target[0] === 'string'
        ? target[0]
        : typeof target === 'string'
          ? target
          : 'Field';
    return `${field.charAt(0).toUpperCase() + field.slice(1) } already exists`;
  } else {

    // Handle other errors
   if (error instanceof Error) {
      return error.message;
    }

    const message = isRecord(error) ? error.message : undefined;
    if (typeof message === 'string') {
      return message;
    }

    return JSON.stringify(error) ?? 'Unable to create your account.';
   
  
  }
  }catch(error: unknown){

  if (error instanceof Error) {
  return error.message;
}

if (isRecord(error) && typeof error.message === 'string') {
  return error.message;
}

return 'Unable to create your account.';
}
}