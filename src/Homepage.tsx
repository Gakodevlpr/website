import { Helmet } from 'react-helmet-async';
import Logo from './assets/logo.svg?react';
import Menu from './components/General/Menu';

export default function Homepage() {
  return (
    <>
      <Helmet>
        <title>Gakodevlpr - Homepage</title>
        {/* SEO content */}
        <meta name="description" content="Web de Gakodevlpr" />
        <meta name="keywords" content="Programación, Desarrollo, Web, Gakodevlpr" />
        <meta name="author" content="Gakodevlpr" />
      </Helmet>
      <div className='flex flex-col items-center justify-center h-screen'>
        <Logo className='w-[300px] md:w-[400px]' />
        <Menu />
      </div>
    </>
  )
}
