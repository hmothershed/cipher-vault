// import React from "react";
import { Copy } from 'lucide-react';

interface CipherOutputProps {
    originalText: string;
    processedText: string;
    operation: 'encrypt' | 'decrypt';
}

const CipherOutput = ({
    originalText,
    processedText,
    operation,
}: CipherOutputProps) => {
    const copyToClipboard = () => {
        navigator.clipboard.writeText(processedText);
    };

    // don't show empty output
    if (!originalText) { return null; }

    return (
        <div className="w-full mt-6 bg-gray-50 rounded-lg border border-gray-200 shadow-sm overflow-hidden transition-all duration-300 ease-in-out">
            <div className="flex justify-between items-center bg-gray-100 p-3 border-b">
                <h3 className="text-sm font-medium text-gray-700 capitalize">
                    {operation === 'encrypt' ? 'Encrypted Text' : 'Decrypted Text'}
                </h3>
                <button onClick={copyToClipboard} className="flex items-center text-sm text-blue-600 hover:text-blue-800 transition-colors" title="Copy to clipboard">
                    <Copy size={16} className="mr-1" />
                </button>
            </div>
            <div className="p-4 min-h-20 max-h-20 overflow-auto break-words">
                {processedText || (
                    <p className="text-gray-400 italic">
                        {operation === 'encrypt' ? 'Your encrypted text will appear here' : 'Your decrypted text will appear here'}
                    </p>
                )}
            </div>
        </div>
    );
};

export default CipherOutput;