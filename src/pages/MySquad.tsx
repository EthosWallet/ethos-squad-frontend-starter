import { BackgroundProvider } from "../components/BackgroundProvider";
import { TESTNET_NFT_CONTRACT } from "../contracts";
import { useMemo } from "react";

const MySquad: React.FC = () => {

    return (
        <BackgroundProvider>
            <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
                <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none">
                    <div className="lg:shrink-0 xl:max-w-2xl">
                        <span className='flex gap-2'>
                            <h1 className="text-4xl font-light tracking-tight text-gray-900 sm:text-6xl">
                                Your
                            </h1>
                            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                                Squad
                            </h1>
                        </span>
                        <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                            This is your squad. Bask in its glory.
                        </p>
                    </div>
                    <div className="w-full mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                        NFT list goes here
                    </div>
                </div>
            </div>
        </BackgroundProvider>
    );
}

export default MySquad;
