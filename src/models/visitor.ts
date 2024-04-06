import { z } from 'zod';

export const visitorSchema = z.object({
  id: z.string(),
  firstName: z.string(),
  middleName: z.string(),
  lastName: z.string(),
  birthDate: z.string(),
  email: z.string(),
  phone: z.string(),
  address: z.string(),
});

export type Visitor = z.infer<typeof visitorSchema>;
