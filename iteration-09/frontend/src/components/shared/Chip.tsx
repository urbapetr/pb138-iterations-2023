import { FC } from 'react';

interface IProps {
    title: string;
    value: string | number;
}

/**
 * UI Chip Component. Show data as data title and value.
 * @param title Title of data
 * @param value Value of data
 * @returns 
 */

const Chip: FC<IProps> = ({ title, value }) => (
    <span className="">
        <span className="text-gray text-sm">{title}: </span>
        <span className="bg-gray-500 text-white rounded-md px-2 py-0.5 text-xs">{value}</span>
    </span>
)

export default Chip;