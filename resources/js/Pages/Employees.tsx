import React from 'react';
import Layout from '../Layouts/Layout';
import { Head } from '@inertiajs/inertia-react';

const Employees = ({ auth }) => {
  return (
    <>
      <Head title="201 Files" />
      <header>
        <h1 className='text-7xl font-bold'>201 Files</h1>
      </header>
      <p>Hello {auth.user.name}, welcome to your first Inertia app!</p>
    </>
  )
}

Employees.layout = page => <Layout children={page} />;

export default Employees;