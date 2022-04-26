import type { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { getWeeksList, getArticlesByCategory, getArticlesByWeek, getCategoriesList } from '@/req';

export const getServerSideProps = async ({ query }: GetServerSidePropsContext) => {
    const isCategory = Number.isNaN(Number(query.id));
    const [arts, weekList, cats] = await Promise.all([
        (isCategory ? getArticlesByCategory : getArticlesByWeek)(query.id as string),
        getWeeksList(),
        getCategoriesList(),
    ]);
    // const arts = await (isCategory ? getArticlesByCategory : getArticlesByWeek)(query.id as string);
    // const weekList = await getWeeksList();
    // const cats = await getCategoriesList();
    // console.log(arts);
    return {
        props: {
            arts,
            weekList,
            cats,
            title: isCategory ? `#${query.id}` : `前端周报第 ${query.id} 期`,
        },
    };
};

export default function Post({
    arts,
    title,
    weekList,
    cats,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
        <div className="flex">
            <Head>
                <title>{title} - NE Weekly! </title>
            </Head>
            <div className="mr-40 flex-1">
                <h1 className="text-3xl font-sans font-bold mb-6">
                    {title}
                    <span className="ml-1 sub text-xl font-normal text-gray-500 dark:text-gray-400">
                        • {arts?.length || 0} 篇
                    </span>
                </h1>
                <section>
                    {arts?.map((it, index) => (
                        <article key={it.id}>
                            <h2 className="text-blue-400 text-2xl mb-3">
                                {index + 1}.{' '}
                                <a
                                    className="hover:text-blue-500 hover:underline"
                                    href={it.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {it.title}
                                </a>
                            </h2>
                            <blockquote className="text-gray-500">{it.description}</blockquote>
                            <div className="mt-2 text-lg mb-6 leading-6 text-gray-500 dark:text-gray-400">
                                <time>{it.timestamp}</time>
                                <Link href={`/posts/${it.category}`}>
                                    <a className="bg-emerald-500 rounded-full py-1 px-3 text-white text-sm align-middle ml-1">
                                        {it.category}
                                    </a>
                                </Link>
                            </div>
                        </article>
                    ))}
                </section>
            </div>
            <aside className="w-3/12 flex-none">
                <section>
                    <h3 className="text-3xl font-bold mb-6">往期分享</h3>
                    <ol>
                        {weekList
                            .slice()
                            .reverse()
                            .slice(0, 10)
                            .map((it) => (
                                <li key={it.id} className="mb-1">
                                    <Link
                                        href={`/posts/${it.count}`}
                                    >{`前端周报第 ${it.count} 期`}</Link>
                                </li>
                            ))}
                    </ol>
                </section>
                <section>
                    <h3 className="text-3xl font-bold mt-8 mb-6">标签索引</h3>
                    <ol className="flex flex-wrap">
                        {cats.map((it) => (
                            <li
                                key={it.name}
                                className="rounded bg-emerald-500 text-white flex items-center justify-center py-1 px-2 m-1"
                            >
                                <Link href={`/posts/${it.name}`}>{it.name}</Link>
                            </li>
                        ))}
                    </ol>
                </section>
            </aside>
        </div>
    );
}
