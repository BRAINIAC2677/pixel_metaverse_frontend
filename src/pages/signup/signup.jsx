import React, { useContext, useEffect, useState } from "react";
import Navbar from "../../global_components/navbar";
import { GlobalContext } from "../../contexts/global_context";

import { Web3Storage } from 'web3.storage'



const Signup = () => {
    const [name, setName] = useState('');
    const [profileImage, setProfileImage] = useState(null);
    const { metamask, setMetamask } = useContext(GlobalContext);

    function getAccessToken() {
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDA3Qzk1QkI4NEIyRkY0OWExNDg2ZDkyNjJBQzhGQzNiZUJlOEVDQjEiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2ODkzMDI1Mjg5ODAsIm5hbWUiOiJwaXhlbF9tZXRhdmVyc2UifQ.mR2e69biHLgni-BHiv3ILuLQ0lcbsEs4IuyKqCUVbiY";
        return token;
    }

    function makeStorageClient() {
        return new Web3Storage({ token: getAccessToken() })
    }

    async function storeFiles(files) {
        const client = makeStorageClient()
        const cid = await client.put(files)
        console.log('stored files with cid:', cid)
        return cid
    }

    const register = async () => {
        const cid = await storeFiles([profileImage]);
        console.log('cid', cid);
        try {
            await metamask.contractWithSigner.register_artist(name, cid);
            console.log('Registered');
        }
        catch (err) {
            console.log(err);
        }
    };


    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleProfileImageChange = (e) => {
        const file = e.target.files[0];
        setProfileImage(file);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform signup logic with name and profile image
        console.log('Name:', name);
        console.log('Profile Image:', profileImage);
        register();
    };

    return (
        <div>
            <Navbar />
            <div className="flex items-center justify-center h-screen">
                <form className="w-full max-w-md px-6 py-8 bg-white rounded-lg shadow-md">
                    <h2 className="mb-8 text-2xl font-bold">Signup</h2>
                    <div className="mb-6">
                        <label htmlFor="name" className="block mb-2 font-semibold">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                            value={name}
                            onChange={handleNameChange}
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="profile-image" className="block mb-2 font-semibold">
                            Profile Image
                        </label>
                        <input
                            type="file"
                            id="profile-image"
                            accept="image/*"
                            className="w-full"
                            onChange={handleProfileImageChange}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
                        onClick={handleSubmit}
                    >
                        Sign Up
                    </button>
                </form>
            </div>

        </div>
    );
};

export default Signup;

