export interface SideContainer {
    children: React.ReactNode;
    className?: string;
}
export const SideContainer = ({ children, className = '' }: SideContainer) => {
    return (
        <div
            className={`${className} grid grid-cols-[200px_200px]  grid-rows-[repeat(auto-fit,200px)] w-fit overflow-scroll gap-10 p-10 bg-slate-300 `}
        >
            {children}
        </div>
    );
};
