import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../global_components/navbar";

function Home() {
    return (
        <div>
            <Navbar />
            <div className="container mx-auto">
                <header className="mt-8">
                    <h1 className="mb-4 text-4xl font-bold">Welcome to Pixel Metaverse</h1>
                    <p className="text-gray-600">
                        A supply chain application for artwork authentication, buying, and selling.
                    </p>
                </header>
                <main className="mt-8">
                    <section>
                        <h2 className="mb-4 text-2xl font-bold">About Us</h2>
                        <p>
                            Pixel Metaverse is a supply chain application for authentic artworks and premium collectibles backed by smart contracts and web3.
                        </p>
                    </section>
                    <section className="mt-8">
                        <h2 className="mb-4 text-2xl font-bold">Services</h2>
                        <ul className="list-disc list-inside">
                            <li>Artwork authentication and verification</li>
                            <li>Secure and transparent buying and selling of artworks</li>
                            <li>Supply chain tracking and provenance</li>
                            <li>Smart contract-based transactions</li>
                            <li>Marketplace for art enthusiasts</li>
                        </ul>
                    </section>
                    <section className="mt-8">
                        <h2 className="mb-4 text-2xl font-bold">Get Started</h2>
                        <p>
                            Ready to explore the world of Pixel Metaverse? Sign up now and start your journey into
                            the digital art realm.
                        </p>
                        <button className="px-4 py-2 mt-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
                            <Link to="/signup">signup</Link>
                        </button>
                    </section>
                </main>
                <footer className="mt-8 text-center">
                    <p className="text-gray-600">© 2023 Pixel Metaverse. All rights reserved.</p>
                </footer>
            </div>

        </div>
    );

}

export default Home;

