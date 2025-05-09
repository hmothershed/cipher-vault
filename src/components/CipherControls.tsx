// import React from 'react';
import { Unlock, Lock, RotateCcw } from 'lucide-react';

interface CipherControlsProps {
    onEncrypt: () => void;
    onDecrypt: () => void;
    onClear: () => void;
    isTextEmpty: boolean;
}

const CipherControls = ({
    onEncrypt,
    onDecrypt,
    onClear,
    isTextEmpty,
}: CipherControlsProps) => {
    return (
        <div className="flex flex-wrap gap-3 justify-center mt-6">
            <button onClick={onEncrypt} disabled={isTextEmpty} className={`flex items-center justify-center px-4 py-2 bg-[#008000] text-white rounded-md shadow-sm hover:bg-[#355935] transition-colors duration-200 ${isTextEmpty ? 'opacity-50 cursor-not-allowed' : ''}`}>
                <Lock size={18} className="mr-2" />
                Encrypt
            </button>

            <button onClick={onDecrypt} disabled={isTextEmpty} className={`flex items-center justify-center px-4 py-2 bg-[#c81f1f] text-white rounded-md shadow-sm hover:bg-[#673b3b] transition-colors duration-200 ${isTextEmpty ? 'opacity-50 cursor-not-allowed' : ''}`}>
                <Unlock size={18} className="mr-2" />
                Decrypt
            </button>

            <button onClick={onClear} className="flex items-center justify-center px-4 py-2 bg-gray-200 text-gray-700 rounded-md shadow-sm hover:bg-gray-300 transition-colors duration-200">
                <RotateCcw size={18} className="mr-2" />
                Clear
            </button>
        </div>
    );
};

export default CipherControls;