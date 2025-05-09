# cipher-vault
This is my attempt at turning my previous repository [CaesarCipher](https://github.com/hmothershed/CaesarCipher) into a web application and changing its logic

![cipher-vault-preview](https://github.com/user-attachments/assets/29d78433-ae0b-4d6b-8a96-03f80f348510)

## Project Structure
```
/
├── public/				# consists of the header font and icon for webpage
├── src/
│   ├── App.tsx				# main application compnent with core layout and state management
│   ├── components/
│   │   ├── AlphabetVisualization.tsx	# table visual of the cipher alphabet mapping
│   │   ├── CipherControls.tsx		# contains the encrypt/decrypt/clear buttons
│   │   ├── CipherInput.tsx		# handles text input and shift value controls
│   │   ├── CipherOutput.tsx		# shows encryption/decryption results
│   │   ├── Header.tsx			# displays the application title and description
│   │   └── HistoryList.tsx		# displays recent history of encrypted/decrypted messages
│   ├── index.css			# global styles and tailwind imports
│   ├── main.tsx			# initializes the react application
│   ├── types
│   │   └── index.ts			# defines typescript interfaces and types
│   ├── utils
│   │   └── cipherLogic.ts		# contains the caesar cipher encryption/decryption logic
│   └── vite-env.d.ts
├── README.md
├── eslint.config.js
├── index.html				# main HTML entry point
├── tailwind.config.js
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts

```

## Getting Started
1. Clone the repository:
``` bash
git clone https://github.com/hmothershed/cipher-vault.git
```
2. Install dependencies:
```bash
npm install
```
3.  Run the development server:
```bash
npm run dev
```

## Features
- 🔒 Encrypt and decrypt messages using Caesar Cipher
- 📈 Visualize the cipher alphabet mapping
- 🕓 View recent encryption/decryption history


## Tech Stack
- React + Vite + TypeScript
- Tailwind CSS for styling
- Lucide React for icons
- React DOM for rendering
