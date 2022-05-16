export interface DropDownItem {
    active: boolean;
    children: string;
    onClick?: () => void;
}
export const DropDownItem = ({
    active,
    children,
    onClick = () => true,
}: DropDownItem) => {
    return (
        <p
            onClick={onClick}
            className={`hover:bg-gray-500 hover:text-white ${
                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
            }
                block px-4 py-2 text-sm`}
        >
            {children}
        </p>
    );
};
