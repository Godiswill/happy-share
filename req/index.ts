import request from '../lib/request';

const weeksListUrl = 'https://weekly.zoo.team:3030/api/weeks/list';
const articlesCategoryUrl = 'https://weekly.zoo.team:3030/api/articles/category';
const artsWeeks = 'https://weekly.zoo.team:3030/api/list';
const catList = 'https://weekly.zoo.team:3030/api/categories/list';
const overview = 'https://weekly.zoo.team:3030/api/summary/overview';

type PostsWeekly = {
    id: number;
    title: string;
    week: number;
    count: number;
    datetime: string;
};

export const getWeeksList = async () => {
    const postsWeekly: PostsWeekly[] = await request(weeksListUrl);
    return postsWeekly;
};

type Article = {
    id: number;
    title: string;
    description: string;
    link: string;
    category: string;
    timestamp: string;
};

/**
 * 获取每周文章列表
 * @param week
 */
export const getArticlesByWeek = async (week: string) => {
    const res: Article[] = await request(`${artsWeeks}?week=${week}`);
    return res;
};

/**
 * 标签分类文章
 * @param category
 */
export const getArticlesByCategory = async (category: string) => {
    const res: Article[] = await request(`${articlesCategoryUrl}?category=${category}`);
    return res;
};

type Category = {
    id: number;
    name: string;
    link: string;
    description: string;
    count: number;
    parentid: number;
};

/**
 * 获取所有标签
 */
export const getCategoriesList = async () => {
    const res: Category[] = await request(catList);
    return res;
};

type OverviewStats = {
    articleTotal: { count: number }[];
    categoryTotal: { count: number }[];
    categoryMap: { category: string; count: number }[];
    weekMap: { week: string; count: number }[];
    monthMap: { month: string; count: number }[];
    mostMan: { referrer: string; count: number }[];
    curWeekMan: { referrer: string; count: number }[];
};

/**
 * 获取所有统计信息
 */
export const getOverview = async () => {
    const res: OverviewStats = await request(overview);
    return res;
};
