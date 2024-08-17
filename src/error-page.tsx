import { useRouteError, isRouteErrorResponse } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError() as Error;
  console.error(error);

  if (!isRouteErrorResponse(error)) {
    return null;
  }

  return (
    <div className='h-screen w-screen flex flex-col gap-5 justify-center items-center'>
      <p className='text-sm font-medium text-customRed uppercase tracking-wide'>
        404 error
      </p>
      <h1 className='text-4xl font-bold text-gray-900 tracking-tight sm:text-5xl mb-2'>
        Page not Found
      </h1>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
