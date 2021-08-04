import Meta from '../components/Meta';
import { getSession } from 'next-auth/client';
import Login from './Login';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed';
export default function Home({ session }) {
  if (!session) return <Login />;
  return (
    <>
      <Meta title='updated' />

      <Header />

      <div className='flex'>
        <Sidebar />
        <Feed />
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}
