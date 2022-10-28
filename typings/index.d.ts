interface IPostsWeekly {
    id: number;
    title: string;
    week: number;
    count: number;
    datetime: string;
}

interface ICategory {
    id: number;
    name: string;
    link: string;
    description: string;
    count: number;
    parentid: number;
}

interface IArticle {
    id: number;
    title: string;
    description: string;
    link: string;
    category: string;
    timestamp: string;
}

interface IOverviewStats {
    articleTotal: { count: number }[];
    categoryTotal: { count: number }[];
    categoryMap: { category: string; count: number }[];
    weekMap: { week: string; count: number }[];
    monthMap: { month: string; count: number }[];
    mostMan: { referrer: string; count: number }[];
    curWeekMan: { referrer: string; count: number }[];
}
