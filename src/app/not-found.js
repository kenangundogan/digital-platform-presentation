import React from 'react';

export default function NotFoundPage() {
    return (
        <div className='relative w-full min-h-screen bg-yellow-50 flex justify-center items-center'>
            <div className='text-center'>
                <h1 className='font-bold text-4xl'>404 - Not Found</h1>
                <p className="text-sm">The page you are looking for does not exist.</p>
            </div>
        </div>
    );
}
