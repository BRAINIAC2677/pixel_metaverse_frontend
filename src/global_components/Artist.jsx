import React, { useEffect } from 'react';

import { Web3Storage } from 'web3.storage'

const Artist = ({ artist }) => {
    const { artist_address, name, img_ipfs_hash } = artist;

    function getAccessToken() {
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDA3Qzk1QkI4NEIyRkY0OWExNDg2ZDkyNjJBQzhGQzNiZUJlOEVDQjEiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2ODkzMDI1Mjg5ODAsIm5hbWUiOiJwaXhlbF9tZXRhdmVyc2UifQ.mR2e69biHLgni-BHiv3ILuLQ0lcbsEs4IuyKqCUVbiY";
        return token;
    }

    function makeStorageClient() {
        return new Web3Storage({ token: getAccessToken() })
    }

    async function retrieve() {
        const cid = "bafybeifc3uot7qzih3wbuaoi3hyy73qdoomsh637pxyayz6zgr34igmote";
        const client = makeStorageClient()
        const res = await client.get(cid)
        console.log(`Got a response! [${res.status}] ${res.statusText}`)
        if (!res.ok) {
            console.log('error', res);
        }
        else {
            console.log('res', res);
            const files = await res.files();
            console.log('files', files);
            //show files by img tag 

        }
    }

    useEffect(() => {
        retrieve();
    }, []);


    return (
        <div className="max-w-md mx-auto overflow-hidden bg-white rounded-lg shadow-md">
            <div className="p-4">
                <h2 className="text-xl font-semibold">{name}</h2>
                <p className="text-gray-500">{`Artist Address: ${artist_address}`}</p>
                <p className="text-gray-500">{`Image IPFS Hash: ${img_ipfs_hash}`}</p>
            </div>
        </div>
    );
};

export default Artist;

