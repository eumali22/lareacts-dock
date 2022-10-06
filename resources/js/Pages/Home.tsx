import React from 'react';
import Layout from '../Layouts/Layout';
import { Head } from '@inertiajs/inertia-react';

const Home = ({ auth }) => {
  return (
    <>
      <Head title="Welcome Home" />
      <header className='text-7xl font-bold'><h1>Welcome</h1></header>
      <p>Hello {auth.user.name}, welcome to your first Inertia app!</p>
    </>
  )
}

Home.layout = page => <Layout children={page} />;

export default Home;