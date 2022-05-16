import Image from 'next/Image';
export interface ImageBigCard {
    children?: string;
    className?: string;
    src: string;
    alt?: string;
}
export const ImageBigCard = ({
    className = '',
    src,
    alt = '',
}: ImageBigCard) => {
    return (
        <div
            className={`${className} rounded-sm shadow-md p-3 bg-white w-[350px] h-[350px]`}
        >
            <img src={src} alt={alt} className='w-full h-full' />
        </div>
    );
};
