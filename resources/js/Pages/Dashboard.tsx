import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head, Link } from '@inertiajs/inertia-react';

declare function route(arg0: string): string;

export default function Dashboard(props) {
  return (
    <Authenticated
      auth={props.auth}
      errors={props.errors}
      header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
    >
      <Head title="Dashboard" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 bg-white border-b border-gray-200">You're logged in!</div>
            <div className="p-6 bg-white border-b border-gray-200">
              <Link href={route('home')}>
                Demo Layout - Home
              </Link>
            </div>
            
          </div>
        </div>
      </div>
    </Authenticated>
  );
}
