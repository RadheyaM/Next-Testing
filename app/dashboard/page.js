import Link from 'next/link';
import Head from 'next/head';

const Dashboard = () => {
    return (
        <>
            <Head>
                <title>Dashboardimus maxiumus!</title>
            </Head>
            <h1>Dashboard!</h1>
            <Link href="/">HOME</Link>
        </>
    )
};

export default Dashboard;