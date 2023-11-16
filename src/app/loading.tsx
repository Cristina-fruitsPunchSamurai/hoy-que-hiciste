'use client'

import { Dna } from "react-loader-spinner"

export default function Loading() {
    return (
        <main className="block bg-white h-screen">
            <Dna
                visible={true}
                height="80"
                width="80"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="m-auto h-screen"
                />
        </main>
    )
}

// à utiliser avec <Suspense> https://www.youtube.com/watch?v=Lzml9L3f4IM&ab_channel=NetNinja