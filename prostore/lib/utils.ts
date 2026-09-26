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
  if (error instanceof ZodError) {
    return error.issues
      .map((issue) => `${issue.path.join('.') || 'Form'}: ${issue.message}`)
      .join('. ');
  }

  if (
    isRecord(error) &&
    error.name === 'PrismaClientKnownRequestError' &&
    error.code === 'P2002'
  ) {
    return 'An account with this email already exists.';
  }

  return error instanceof Error ? error.message : 'Unable to create your account.';
}