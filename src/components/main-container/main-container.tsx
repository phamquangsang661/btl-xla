export interface MainContainer {
    children: React.ReactNode;
    className?: string;
}
export const MainContainer = ({ children, className = '' }: MainContainer) => {
    return (
        <div
            className={`${className} h-2/3 w-full flex flex-row justify-center items-center`}
        >
            {children}
        </div>
    );
};
