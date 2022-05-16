import Image from 'next/Image';
export interface ImageCard {
    children?: string;
    className?: string;
    src: string;
    alt?: string;
    onClick: () => void;
}
export const ImageCard = ({
    children,
    className = '',
    src,
    alt = '',
    onClick,
}: ImageCard) => {
    return (
        <div className="relative block w-[200px] h-[200px]">
            <div
                className={`${className} rounded-sm shadow-md hover:absolute hover:top-[-5px] ease-out duration-300 hover:scale-110 p-3 bg-white w-[200px] h-[200px]`}
            >
                <Image
                    onClick={() => onClick()}
                    loader={() => src}
                    src={src}
                    alt={alt}
                    width={20}
                    height={20}
                    layout="responsive"
                />
            </div>
        </div>
    );
};
