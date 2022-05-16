export interface BottomContainer {
    children: React.ReactNode;
    className?: string;
}
export const BottomContainer = ({
    children,
    className = '',
}: BottomContainer) => {
    return <div className={`${className} border h-1/3 w-full bg-slate-100 shadow-lg flex flex-col`}>{children}</div>;
};
