import React, { useEffect } from 'react';
import { ArrowRightLeft } from 'lucide-react';

interface CipherInputProps {
    text: string;
    shift: number;
    onTextChange: (text: string) => void;
    onShiftChange: (shift: number) => void;
}

const CipherInput = ({
    text,
    shift,
    onTextChange,
    onShiftChange,
}: CipherInputProps) => {
    const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        onTextChange(e.target.value);
    };

    const handleShiftChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newShift = parseInt(e.target.value, 10);
        if (!isNaN(newShift) && newShift >= 0 && newShift <= 25){
            onShiftChange(newShift);
            updateRangeBackground(newShift);
        }
    };

    const updateRangeBackground = (value: number) => {
        const percentage = (value/25) * 100;
        const rangeInput = document.getElementById('shift-value') as HTMLInputElement;
        if (rangeInput) {
            rangeInput.style.background = `linear-gradient(to right, #008000 0%, #008000 ${percentage}%, #e5e7eb ${percentage}%, #e5e7eb 100%)`;
        }
    };

    // initialize range background on component mount and shift changes
    useEffect(() => {
        updateRangeBackground(shift);
    }, [shift]);

    return (
        <div className='w-full space-y-4'>
            <div className='space-y-2'>
                <label htmlFor='input-text' className='block text-sm font-bold text-gray-700'>
                    Enter text to encrypt/decrypt
                </label>
                <textarea id='input-text' value={text} onChange={handleTextChange} placeholder='Type or paste your text here...' className='w-full h-32 p-3 border bg-transparent border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200' />
            </div>

            <div className='space-y-2'>
                <label htmlFor='shift-value' className='block text-sm font-bold text-gray-700'>
                    Shift value (0-25): {shift}
                </label>
                <div className='flex items-center space-x-2'>
                    <input id='shift-value' type='range' min='0' max='25' value={shift} onChange={handleShiftChange} className='w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer' />
                    <input type='number' min='0' max='25' value={shift} onChange={handleShiftChange} className='w-16 p-2 border border-gray-300 rounded-lg shadow-sm text-center' />
                </div>
            </div>

            <div className='flex items-center justify-center text-gray-500 text-sm py-2'>
                <ArrowRightLeft size={16} className='mr-2' />
                <span>Shift {shift > 0 ? `= ${shift}` : '= 0 (no change)'}</span>
            </div>
        </div>
    );
};

export default CipherInput;