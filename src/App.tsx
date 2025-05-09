import { useState } from 'react';
import CipherInput from './components/CipherInput';
import CipherOutput from './components/CipherOutput';
import CipherControls from './components/CipherControls';
import AlphabetVisualization from './components/AlphabetVisualization';
import HistoryList from './components/HistoryList';
import Header from './components/Header';
import { applyCaesarCipher } from './utils/cipherLogic';
import { HistoryItem } from './types';

function App () {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [shift, setShift] = useState(3);  // default shift of 3
  const [operation, setOperation] = useState<'encrypt' | 'decrypt'>('encrypt');
  const [history, setHistory] = useState<HistoryItem[]>([]);

  const handleEncrypt = () => {
    if (!inputText.trim()) return;

    const encrypted = applyCaesarCipher(inputText, shift, 'encrypt');
    setOutputText(encrypted);
    setOperation('encrypt');

    // add to history
    addToHistory({
      originalText: inputText,
      processedText: encrypted,
      shift,
      operation: 'encrypt',
      timestamp: Date.now()
    });
  };

  const handleDecrypt = () => {
    if (!inputText.trim()) return;

    const decrypted = applyCaesarCipher(inputText, shift, 'decrypt');
    setOutputText(decrypted);
    setOperation('decrypt');

    // add to history
    addToHistory({
      originalText: inputText,
      processedText: decrypted,
      shift,
      operation: 'decrypt',
      timestamp: Date.now()
    });
  };

  const handleClear = () => {
    setInputText('');
    setOutputText('');
  };

  const addToHistory = (item: HistoryItem) => {
    // limit history to 10 itmes
    setHistory(prev => [item, ...prev].slice(0, 10));
  };

  const handleSelectHistoryItem = (item: HistoryItem) => {
    setInputText(item.originalText);
    setOutputText(item.processedText);
    setShift(item.shift);
    setOperation(item.operation);
  };

  const handleClearHistory = () => {
    setHistory([]);
  };

  return (
    <div className='min-h-screen bg-linear-to-bl from-[#8e9eab] to-[#eef2f3]'>
      <div className='max-w-3xl mx-auto px-4 py-8'>
        
        <main className='backdrop-blur-xl backdrop-filter bg-white/40 rounded-xl shadow-lg p-6 mt-6'>
        <Header />
          <CipherInput text={inputText} shift={shift} onTextChange={setInputText} onShiftChange={setShift} />
          <CipherControls onEncrypt={handleEncrypt} onDecrypt={handleDecrypt} onClear={handleClear} isTextEmpty={!inputText.trim()} />
          <CipherOutput originalText={inputText} processedText={outputText} operation={operation} />
          <AlphabetVisualization shift={shift} operation={operation} />
          <HistoryList history={history} onSelectHistoryItem={handleSelectHistoryItem} onClearHistory={handleClearHistory} />
        </main>

        <footer className='mt-8 text-center text-gray-500 text-sm'>
          <p>Coded by Harmony Mothershed</p>
        </footer>
      </div>
    </div>
  );
}

export default App;