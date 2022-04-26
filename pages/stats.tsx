import Head from 'next/head';
import dynamic from 'next/dynamic';
import type { InferGetServerSidePropsType } from 'next';
import { getOverview } from '@/req';

const Charts = dynamic(() => import('@/components/common/Chartjs2'), {
    ssr: false, //这个要加上,禁止使用 SSR
});

export const getServerSideProps = async () => {
    const stats = await getOverview();
    return {
        props: {
            stats,
        },
    };
};

export default function Home({ stats }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
        <>
            <Head>
                <title>NE 分享统计</title>
            </Head>

            <div className="text-center">
                <h1 className="text-xl font-bold">半年期数据</h1>
                <div>
                    累计文章：{stats.articleTotal[0].count} 篇，累计分类：
                    {stats.categoryTotal[0].count} 条目
                </div>
            </div>

            <Charts
                title="每周数据"
                xAxisKey="week"
                yAxisKey="count"
                data={stats.weekMap}
                type="line"
            />
            <Charts
                title="月度数据"
                xAxisKey="month"
                yAxisKey="count"
                data={stats.monthMap}
                type="col"
            />
            <Charts
                title="分类数据"
                xAxisKey="category"
                yAxisKey="count"
                data={stats.categoryMap}
                type="col"
                indexAxis="y"
                chartContainerStyle={{ height: 500 }}
            />
            <Charts
                title="前六数据"
                xAxisKey="category"
                yAxisKey="count"
                data={stats.categoryMap.slice(0, 6)}
                type="pie"
            />
        </>
    );
}
