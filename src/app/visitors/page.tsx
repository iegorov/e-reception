import { promises as fs } from 'fs';
import path from 'path';
import { z } from 'zod';

import { DataTable } from '@/components/data-table';
import { columns } from './components/visitors-columns';
import { Visitor, visitorSchema } from '@/models/visitor';

async function getVisitors(): Promise<Visitor[]> {
  const data = await fs.readFile(
    path.join(process.cwd(), 'src/mocks/visitors.json'),
  );

  const visitors = JSON.parse(data.toString());

  return z.array(visitorSchema).parse(visitors);
}

export default async function Visitors(): Promise<JSX.Element> {
  const visitors = await getVisitors();

  return (
    <>
      <div>
        <h2 className='text-2xl font-bold tracking-tight'>Visitors</h2>
        <p className='text-muted-foreground'>Here's a list of your visitors!</p>
      </div>
      <div className='mt-8 flex flex-col gap-4'>
        <DataTable columns={columns} data={visitors} />
      </div>
    </>
  );
}
