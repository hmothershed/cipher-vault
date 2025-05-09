// import React from "react";
//import { KeyRound } from 'lucide-react';

const Header = () => {
    return (
        <header className="py-6">
            <div className="flex items-center justify-center">
                {/* <KeyRound size={32} className="text-[#147322] mr-3" /> */}
                <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-medium text-[#2fdc2f] text-shadow-lg/20 font-['Arcade']">CIPHER VAULT</h1>
            </div>
            <p className="text-xs md:text-sm lg:text-base text-center italic text-[#000401] mt-2 max-w-md mx-auto">
                A simple and secure way to encrypt and decrypt text using the classical Caesar Cipher shift technique.
            </p>
        </header>
    );
};

export default Header;