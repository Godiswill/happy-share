import request from '../lib/request';

// const weeksListUrl = 'http://localhost:8888/api/posts';
// const weeksListUrl = 'https://weekly.zoo.team:3030/api/weeks/list';
const articlesCategoryUrl = 'https://weekly.zoo.team:3030/api/articles/category';
const artsWeeks = 'https://weekly.zoo.team:3030/api/list';
const catList = 'https://weekly.zoo.team:3030/api/categories/list';
const overview = 'https://weekly.zoo.team:3030/api/summary/overview';

export const getWeeksList = async () => {
    // const postsWeekly: IPostsWeekly[] = await request(weeksListUrl);
    return [
        {
            id: 1,
            title: '第 xx 期',
            week: 1,
            count: 3,
            datetime: '2022-10-24',
        },
    ];
};

/**
 * 获取每周文章列表
 * @param week
 */
export const getArticlesByWeek = async (week: string) => {
    const res: IArticle[] = await request(`${artsWeeks}?week=${week}`);
    return res;
};

/**
 * 标签分类文章
 * @param category
 */
export const getArticlesByCategory = async (category: string) => {
    const res: IArticle[] = await request(`${articlesCategoryUrl}?category=${category}`);
    return res;
};

/**
 * 获取所有标签
 */
export const getCategoriesList = async () => {
    const res: ICategory[] = await request(catList);
    return res;
};

/**
 * 获取所有统计信息
 */
export const getOverview = async () => {
    const res: IOverviewStats = await request(overview);
    return res;
};
