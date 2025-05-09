export interface CipherData {
    originalText: string;
    processedText: string;
    shift: number;
    operation: 'encrypt' | 'decrypt';
    timestamp: number;
}

export type HistoryItem = CipherData;