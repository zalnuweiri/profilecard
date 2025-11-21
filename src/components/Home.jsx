import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-400 via-teal-500 to-blue-500 text-white">
            <h1 className="text-4xl font-bold mb-6">Welcome to My Site</h1>
            <div className="space-x-4">
                <Link to="/profile" className="underline hover:text-gray-200">Go to Profile</Link>
            </div>
        </div>
    );
}

export default Home;
