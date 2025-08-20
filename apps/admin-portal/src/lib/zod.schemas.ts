import { simple_phone } from '@shared/lib/zod.validator';
import { USStateEnum } from 'shared';
import { z } from 'zod';

import { z_email } from './zod.validator';

export const ProfileSchema = z.object({
  firstName: z
    .string({ required_error: 'First Name is required' })
    .min(1, { message: 'First Name is required' })
    .trim(),
  lastName: z
    .string({ required_error: 'Last Name is required' })
    .min(1, { message: 'Last Name is required' })
    .trim(),
  phone: simple_phone,
});

export const CreateFacilitySchema = z.object({
  name: z.string().trim().min(1, { message: 'Company Name is required' }),
  address: z.string().trim().min(1, { message: 'Address is required' }),
  addressLineTwo: z.string().trim().optional(),
  city: z.string().trim().min(1, { message: 'City is required' }),
  state: z.nativeEnum(USStateEnum, {
    errorMap: () => ({ message: 'State is required' }),
  }),
  zipCode: z
    .string({ required_error: 'Zipcode is required' })
    .regex(/^([0-9]{5})(?:[-\s]*([0-9]{4}))?$/, {
      message: 'Invalid Zipcode',
    }),
  firstName: z
    .string()
    .trim()
    .min(1, { message: 'Admin First Name is required' }),
  lastName: z
    .string()
    .trim()
    .min(1, { message: 'Admin Last Name is required' }),
  phone: simple_phone,
  email: z_email,
});

export const CreateTherapistSchema = z.object({
  firstName: z
    .string({ required_error: 'First Name is required' })
    .min(1, { message: 'First Name is required' })
    .trim(),
  lastName: z
    .string({ required_error: 'Last Name is required' })
    .min(1, { message: 'Last Name is required' })
    .trim(),
  phone: simple_phone,
  email: z_email,
  facilityId: z.string().min(1),
});

export const CreateAdminSchema = z.object({
  firstName: z
    .string({ required_error: 'First Name is required' })
    .min(1, { message: 'First Name is required' })
    .trim(),
  lastName: z
    .string({ required_error: 'Last Name is required' })
    .min(1, { message: 'Last Name is required' })
    .trim(),
  phone: simple_phone,
  email: z_email,
});
