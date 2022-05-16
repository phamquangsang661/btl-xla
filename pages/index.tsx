import type { NextPage } from 'next';
import {
    Layout,
    SideContainer,
    ImageCard,
    ImageBigCard,
    InputFileDialog,
    BottomContainer,
    DropDown,
} from '@components';
import { useFormik } from 'formik';
import { ChevronRightIcon } from '@heroicons/react/solid';
import { useUploadImage, useFilter, useMatrix } from '@hooks';
import { MainContainer } from 'src/components/main-container/main-container';
import { FILTERS } from '@utils/constant';
const Home: NextPage = () => {
    const {
        uploadToServer,
        uploadToClient,
        urls,
        urlSelected,
        setUrlSelected,
    } = useUploadImage();
    const {
        convertToMatrixName,
        matrixName,
        matrixFlatten,
        convertMatrixToArray,
        generateFullMatrix,
    } = useMatrix();
    const {
        filterSelected,
        setFilterSelected,
        postFilter,
        filterUrl,
        isLoading,
    } = useFilter();

    const formikFilter = useFormik({
        initialValues: { ...matrixFlatten, D0: 0, order: 2 },
        onSubmit: async (values) => {
            let data: { [key: string]: any } = {};

            data.D0 = values.D0;

            if (
                ['butterlowpass', 'butterhighpass'].includes(
                    filterSelected.value
                )
            ) {
                data.order = values.order;
            }
            await postFilter(
                data,
                filterSelected.value,
                urlSelected.substring(urlSelected.lastIndexOf('/') + 1)
            );
        },
    });
    return (
        <Layout title="Filter image" description="Filter image">
            <div className="flex flex-row">
                <div className="w-fit">
                    <SideContainer className="h-[calc(100vh_-_54px)]">
                        {urls.map((url, index) => (
                            <ImageCard
                                key={index}
                                src={url}
                                alt="image"
                                onClick={() => {
                                    setUrlSelected(url);
                                }}
                            />
                        ))}
                    </SideContainer>
                    <div className="flex justify-between py-3 border px-2 bg-slate-100">
                        <InputFileDialog
                            onChange={uploadToClient}
                        ></InputFileDialog>
                        <button
                            className="rounded border bg-slate-300 px-3 hover:bg-slate-500 hover:text-white"
                            type="button"
                            name="upload"
                            onClick={(e) => {
                                uploadToServer(e);
                            }}
                        >
                            Upload
                        </button>
                    </div>
                </div>
                <div className="flex flex-col w-full">
                    <MainContainer className="bg-slate-50">
                        <div className="w-full px-[100px] flex flex-row justify-evenly items-center">
                            <ImageBigCard
                                src={
                                    urlSelected == ''
                                        ? '/vercel.svg'
                                        : urlSelected
                                }
                                alt="image"
                                className="hover:scale-150 z-10 hover:z-20 hover:shadow-2xl hover:border-black ease-in-out duration-500"
                            />
                            {isLoading ? (
                                <svg
                                    className="animate-spin h-5 w-5"
                                    width="50"
                                    height="50"
                                    viewBox="0 0 24 24"
                                >
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="white"
                                        strokeWidth="4"
                                    ></circle>
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                    ></path>
                                </svg>
                            ) : (
                                <ChevronRightIcon
                                    className="animate-bounce "
                                    width={50}
                                    height={50}
                                ></ChevronRightIcon>
                            )}

                            <ImageBigCard
                                src={
                                    filterUrl == '' ? '/vercel.svg' : filterUrl
                                }
                                alt="image"
                                className="hover:scale-150 z-10 hover:shadow-2xl hover:border-black ease-in-out duration-500"
                            />
                        </div>
                    </MainContainer>
                    <BottomContainer>
                        <div className="flex flex-col">
                            <div className="flex flex-row pl-1 pr-3">
                                <form
                                    className="border rounded-sm shadow-md ml-2 p-2 flex flex-row  text-center justify-start w-full gap-3 items-center"
                                    onSubmit={formikFilter.handleSubmit}
                                >
                                    <DropDown
                                        options={FILTERS}
                                        selected={filterSelected}
                                        setSelected={setFilterSelected}
                                    ></DropDown>

                                    <div className="flex gap-2">
                                        <label className="font-medium text-gray-700">
                                            D0:
                                        </label>
                                        <div>
                                            <input
                                                type="number"
                                                name="D0"
                                                onChange={
                                                    formikFilter.handleChange
                                                }
                                                value={formikFilter.values.D0}
                                            />
                                        </div>
                                    </div>

                                    {[
                                        'butterlowpass',
                                        'butterhighpass',
                                    ].includes(filterSelected.value) && (
                                        <div className="flex gap-2">
                                            <label className="font-medium text-gray-700">
                                                Order
                                            </label>
                                            <div>
                                                <input
                                                    type="number"
                                                    name="order"
                                                    value={
                                                        formikFilter.values
                                                            .order
                                                    }
                                                    onChange={
                                                        formikFilter.handleChange
                                                    }
                                                />
                                            </div>
                                        </div>
                                    )}

                                    <button
                                        className="bg-slate-300 px-2 rounded-sm "
                                        type="submit"
                                    >
                                        Filter
                                    </button>
                                </form>
                            </div>
                        </div>
                    </BottomContainer>
                </div>
            </div>
        </Layout>
    );
};

export default Home;
