import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    return (
        <header className="bg-gray-800 text-white px-9 py-4 flex items-center">
            <h1 className="text-2xl">
                <Link href="/">NE 学习周报</Link>
            </h1>
            <div className="flex-auto flex justify-between">
                <div>
                    {/* <Link href="/">首页</Link> */}
                    {/* <Link href="/summary">数据看板</Link> */}
                </div>
                <div>
                    <a href="https://github.com/Godiswill" target="_blank" rel="noreferrer">
                        <Image
                            src="/images/rss.png"
                            width={32}
                            height={32}
                            alt="rss"
                            className="rss"
                        />
                    </a>
                </div>
            </div>
        </header>
    );
}
