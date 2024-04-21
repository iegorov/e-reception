'use client';

import { ColumnDef } from '@tanstack/react-table';
import { Visitor } from '@/models/visitor-schema';
import { DataTableColumnHeader } from '@/components/data-table-column-header';
import { Checkbox } from '@/components/ui/checkbox';
import { format } from 'date-fns';

export const columns: ColumnDef<Visitor>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label='Select all'
        className='flex translate-y-[2px]'
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label='Select row'
        className='flex translate-y-[2px]'
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    id: 'name',
    accessorFn: (originalRow) => {
      const { firstName, middleName, lastName } = originalRow;

      return `${lastName} ${firstName} ${middleName}`;
    },
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
    cell: ({ row }) => {
      const { birthDate } = row.original;
      const formattedDate = format(birthDate, 'dd.MM.yyyy');

      return `${formattedDate}`;
    },
  },
  {
    accessorKey: 'email',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Email' />
    ),
    enableSorting: false,
  },
  {
    accessorKey: 'phone',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Phone' />
    ),
    enableSorting: false,
  },
  {
    accessorKey: 'address',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Address' />
    ),
    enableSorting: false,
  },
];
