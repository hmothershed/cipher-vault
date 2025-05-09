// import React from "react";
import { HistoryItem } from "../types";
import { Clock, ArrowRight } from 'lucide-react';

interface HistoryListProps {
    history: HistoryItem[];
    onSelectHistoryItem: (item: HistoryItem) => void;
    onClearHistory: () => void;
}

const HistoryList = ({
    history,
    onSelectHistoryItem,
    onClearHistory,
}: HistoryListProps) => {
    if (history.length === 0) { return null; }

    const formatTimeStamp = (timestamp: number) => {
        return new Date(timestamp).toLocaleDateString([], {
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    return (
        <div className="mt-8 border border-gray-200 rounded-lg overflow-hidden">
            <div className="flex justify-between items-center bg-gray-100 p-3 border-b">
                <h3 className="text-sm font-medium text-gray-700 flex items-center">
                    <Clock size={16} className="mr-2" />
                    Recent History
                </h3>
                {history.length > 0 && (
                    <button onClick={onClearHistory} className="text-xs text-red-600 hover:text-red-800 transition-colors">
                        Clear All
                    </button>
                )}
            </div>

            <div className="max-h-64 overflow-y-auto">
                {history.map((item, index) => (
                    <div key={index} onClick={() => onSelectHistoryItem(item)} className="p-3 border-b border-gray-200 hover:bg-gray-50 cursor-pointer transition-colors duration-150">
                        <div className="flex justify-between items-center mb-1">
                            <span className="text-xs font-medium text-gray-500 capitalize">
                                {item.operation}ed (Shift {item.shift})
                            </span>
                            <span className="text-xs text-gray-400">
                                {formatTimeStamp(item.timestamp)}
                            </span>
                        </div>

                        <div className="flex items-center gap-2 text-sm">
                            <div className="truncate max-w-24 text-gray-500">{item.originalText.slice(0,20)}{item.originalText.length > 20 ? '...' : ''}</div>
                            <ArrowRight size={14} className="text-gray-400 flex-shrink-0" />
                            <div className="truncate max-w-24 text-gray-700 font-medium">{item.processedText.slice(0, 20)}{item.processedText.length > 20 ? '...' : ''}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HistoryList;