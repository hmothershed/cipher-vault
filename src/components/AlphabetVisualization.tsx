import { useMemo } from 'react';
import { generateAlphabetMapping } from '../utils/cipherLogic';

interface AlphabetVisualizationProps {
    shift: number,
    operation: 'encrypt' | 'decrypt';
}

const AlphabetVisualization = ({ shift, operation }: AlphabetVisualizationProps) => {
    const { original, shifted } = useMemo(() => {
        // for decryption, invert the shift direction
        const effectiveShift = operation === 'encrypt' ? shift : (26 - shift) % 26;
        return generateAlphabetMapping(effectiveShift);
    }, [shift, operation]);

    // don't show anything for shift 0 since there is no change
    if (shift === 0) { return null; }

    return (
        <div className="mt-8 p-4 border border-gray-200 rounded-lg bg-gray-50">
            <h3 className="text-sm font-medium text-center text-gray-700 mb-3">
                {operation === 'encrypt' ? 'Encryption' : 'Decryption'} Key Visualization
            </h3>

            <div className="relative overflow-x-auto">
                <div className="min-w-[780px] w-full pb-1">
                    <div className="flex justify-center">
                        <div className="grid grid-cols-26 gap-x-0 w-full">
                            {original.split('').map((char, index) => (
                                <div key={`orig-${index}`} className="flex justify-center items-center w-8 h-8 border-t border-l border-r border-gray-300 bg-white text-sm font-medium"> {char} </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex justify-center -mt-px">
                        <div className="grid grid-cols-26 gap-x-0 w-full">
                            {shifted.split('').map((char, index) => (
                                <div key={`shift-${index}`} className="flex justify-center items-center w-8 h-8 border-b border-l border-r border-gray-300 bg-gray-600 text-sm font-medium text-white"> {char} </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-center mt-3 text-xs text-gray-500">
                <span className="hidden sm:inline">
                    Each letter is {operation === 'encrypt' ? 'shifted forward' : 'shifted backward'} by {shift} position{shift !== 1 ? 's' : ''}
                </span>
                <span className="sm:hidden">
                    Scroll horizontally to view all letters
                </span>
            </div>
        </div>
    );
};

export default AlphabetVisualization;