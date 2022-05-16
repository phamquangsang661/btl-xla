import { Fragment, useMemo } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { DropDownItem } from './dropdown-item';
function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

type option = { value: any; label: string };

export interface DropDown {
    selected?: option | null;
    setSelected?: React.Dispatch<React.SetStateAction<option>>;
    placeholder?: string;
    options: option[];
    className?: string;
}

export function DropDown({
    selected = null,
    setSelected = () => true,
    placeholder = 'Chọn',
    options,
    className = '',
}: DropDown) {
    const optionsChild = useMemo(
        () =>
            options.map((item) => (
                <Menu.Item key={item.value}>
                    {() => {
                        return (
                            <DropDownItem
                                onClick={() => {
                                    setSelected(item);
                                }}
                                active={selected == item}
                            >
                                {item.label}
                            </DropDownItem>
                        );
                    }}
                </Menu.Item>
            )),
        [selected, options]
    );
    const information = useMemo(() => {
        if (selected != null) {
            if (!options.includes(selected)) return placeholder;
        }

        return selected === null ? placeholder : selected.label;
    }, [selected, options]);

    return (
        <Menu
            as="div"
            className={`${className} relative inline-block text-left`}
        >
            <div>
                <Menu.Button className="inline-flex justify-center w-full rounded-sm border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                    {information}
                    <ChevronDownIcon
                        className="-mr-1 ml-2 h-5 w-5"
                        aria-hidden="true"
                    />
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="origin-top-right absolute mt-2 w-56 rounded-sm shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50 overflow-y-scroll h-[100px]">
                    <div className="py-1">{optionsChild}</div>
                </Menu.Items>
            </Transition>
        </Menu>
    );
}
