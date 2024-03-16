import { ColumnDef } from '@tanstack/react-table';

export interface Visitor {
  name: string;
  birthDate: string;
  email: string;
  phone: string;
  address: string;
}

export const columns: ColumnDef<Visitor>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'birthDate',
    header: 'Birth date',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'phone',
    header: 'Phone',
  },
  {
    accessorKey: 'address',
    header: 'Address',
  },
];
