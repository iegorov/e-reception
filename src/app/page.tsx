'use client';

import { Button } from '@/components/ui';

export default function Home(): JSX.Element | null {
  const handleClick = (): void => {
    console.log('You clicked me!');
  };
  return (
    <>
      <h2 className='scroll-m-20 border-b pt-8 text-center text-3xl font-semibold tracking-tight first:mt-0'>
        E-Reception
      </h2>
      <div>
        <Button className='ml-16 mt-8' onClick={handleClick}>
          Click on me
        </Button>
      </div>
    </>
  );
}
