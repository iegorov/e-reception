export default function Visitors(): JSX.Element | null {
  return (
    <>
      <div>
        <h2 className='text-2xl font-bold tracking-tight'>Visitors</h2>
        <p className='text-muted-foreground'>Here's a list of your visitors!</p>
      </div>
      <div className='space-y-4'>
        <div>{/* TODO: Добавить кнопку */}</div>
      </div>
    </>
  );
}
