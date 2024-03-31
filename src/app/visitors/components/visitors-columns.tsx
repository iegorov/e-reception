'use client';

import { ColumnDef } from '@tanstack/react-table';
import { Visitor } from '../data/visitor-schema';
import { DataTableColumnHeader } from '@/components/data-table-column-header';

export const columns: ColumnDef<Visitor>[] = [
  {
    accessorKey: 'name',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Name' />
    ),
    cell: ({ row }) => {
      const { firstName, middleName, lastName } = row.original;

      return `${lastName} ${firstName} ${middleName}`;
    },
  },
  {
    accessorKey: 'birthDate',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Birth date' />
    ),
  },
  {
    accessorKey: 'email',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Email' />
    ),
  },
  {
    accessorKey: 'phone',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Phone' />
    ),
  },
  {
    accessorKey: 'address',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Address' />
    ),
  },
];
