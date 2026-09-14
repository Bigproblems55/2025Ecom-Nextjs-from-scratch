'use client';
import {Button} from '@/components/ui/button';
import {APP_NAME} from '@/lib/constants';
import Image from 'next/image';
const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Image src="/images/logo.svg" width={48} height={48} alt={`${APP_NAME} logo`} priority={true}/>
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg text-gray-600">Sorry, the page you are looking for does not exist.</p>
    </div>
  );
};

export default NotFoundPage;