import Head from 'next/head';
export interface Layout {
    children: React.ReactNode;
    title: string;
    description: string;
    className?: string;
}
export const Layout = ({
    children,
    title,
    description,
    className = '',
}: Layout) => {
    return (
        <div className="h-[100%]">
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <link rel="icon" href="../../../public/favicon.ico" />
            </Head>
            <main className={className}>
                <> {children}</>
            </main>
        </div>
    );
};
