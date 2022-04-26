// 全局入口文件
import type { AppProps } from 'next/app';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import 'tailwindcss/tailwind.css'; // 全局样式只能在这里引入

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Header />
            <main
                className="bg-gray-100 px-20 py-8"
                style={{ height: 'calc(100vh - 70px - 72px)', overflowY: 'auto' }}
            >
                <Component {...pageProps} />
            </main>
            <Footer />
            <style global jsx>{`
                a {
                    cursor: pointer;
                }
            `}</style>
        </>
    );
}
