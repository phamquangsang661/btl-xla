export interface RadioButtonContainer {
    className?: string;
    options: { label: string; id: string }[];
    onChange: (event: any) => void;
    name?: string;
}
export const RadioButtonContainer = ({
    className = '',
    name,
    options,
    onChange,
}: RadioButtonContainer) => {
    return (
        <div className={className}>
            <fieldset>
                <div className="flex flex-row items-center gap-4 p-3">
                    {options.map((option) => (
                        <div
                            key={option.id}
                            className="relative flex items-start"
                        >
                            <div className="flex items-center h-5">
                                <input
                                    id={option.id}
                                    aria-describedby={`${option.id}-description`}
                                    name={name}
                                    onChange={onChange}
                                    value={option.id}
                                    type="radio"
                                    defaultChecked={option.id === 'small'}
                                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                />
                            </div>
                            <div className="ml-3 text-sm">
                                <label
                                    htmlFor={option.id}
                                    className="font-medium text-gray-700"
                                >
                                    {option.label}
                                </label>
                            </div>
                        </div>
                    ))}
                </div>
            </fieldset>
        </div>
    );
};
