import { DataTable } from '@/components/data-table';
import { Visitor, columns } from './components/visitors-columns';

async function getVisitors(): Promise<Visitor[]> {
  // Fetch data from your API here.
  return [
    {
      name: 'Иванов Иван Иванович',
      birthDate: '01.03.1980',
      email: 'test@mail.ru',
      phone: '8 (915) 050-46-72',
      address: 'Новосибирск, ул. Кривощековская, 15, кв.1',
    },
  ];
}

export default async function Visitors(): Promise<JSX.Element> {
  const visitors = await getVisitors();

  return (
    <>
      <div>
        <h2 className='text-2xl font-bold tracking-tight'>Visitors</h2>
        <p className='text-muted-foreground'>
          Here's a list of your visitors !
        </p>
      </div>
      <div className='space-y-4'>
        <div>UserNav</div>
      </div>
      <DataTable columns={columns} data={visitors} />
    </>
  );
}
