import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import type { InferGetServerSidePropsType } from 'next';
import { getWeeksList } from '@/req';

export const getServerSideProps = async () => {
    const postsWeekly = await getWeeksList();
    return {
        props: {
            postsWeekly,
        },
    };
};

export default function Home({
    postsWeekly,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
        <>
            <Head>
                <title>NE 学习分享周报</title>
                {/*<link rel="icon" href="/favicon.ico" />*/}
            </Head>

            <div className="flex justify-between flex-wrap">
                {postsWeekly?.reverse().map((it) => (
                    <Link href={`/posts/${it.count}`} key={it.id} passHref>
                        <figure className="p-4 text-center rounded-sm bg-white m-4 shadow transition duration-300 ease-in-out hover:shadow-lg cursor-pointer transform hover:-translate-y-0.5">
                            <Image
                                className="rounded"
                                width="240"
                                height="180"
                                src="/images/profile.jpg"
                                alt="weekly"
                            />
                            <figcaption>学习周报 {it.count} 期</figcaption>
                        </figure>
                    </Link>
                ))}
            </div>
        </>
    );
}
