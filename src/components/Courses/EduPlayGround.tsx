import React, { useState, useRef, useEffect } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

export type Language = 'python' | 'html' | 'css' | 'javascript' | 'typescript' | 'pseudocode';

export interface Lesson {
  id: string;
  title: string;
  content: string;
  code?: string;
  expectedOutput?: string;
}

export interface EduPlayGroundProps {
  language: Language;
  lessons: Lesson[];
  currentLessonIndex?: number;
  onLessonChange?: (index: number) => void;
  onCodeRun?: (code: string, output: string) => void;
  className?: string;
}

const LANGUAGE_CONFIG = {
  python: {
    name: 'Python',
    extension: '.py',
    syntax: 'python',
    defaultCode: '# My First Code\nprint("Hello, World!")',
    runner: (code: string) => {
      // In a real implementation, this would connect to a Python runtime
      // For now, we'll simulate Python execution
      try {
        // Simple Python-like execution simulation
        const lines = code.split('\n');
        const outputs: string[] = [];
        
        for (const line of lines) {
          if (line.trim().startsWith('print(')) {
            const match = line.match(/print\("([^"]*)"\)/);
            if (match) {
              outputs.push(match[1]);
            }
          }
        }
        
        return outputs.join('\n');
      } catch (error) {
        return `Error: ${error}`;
      }
    }
  },
  html: {
    name: 'HTML',
    extension: '.html',
    syntax: 'html',
    defaultCode: '<!DOCTYPE html>\n<html>\n<head>\n    <title>My First Page</title>\n</head>\n<body>\n    <h1>Hello, World!</h1>\n</body>\n</html>',
    runner: (code: string) => {
      // For HTML, we'll show a preview
      return 'HTML Preview generated';
    }
  },
  css: {
    name: 'CSS',
    extension: '.css',
    syntax: 'css',
    defaultCode: 'body {\n    font-family: Arial, sans-serif;\n    background-color: #f0f0f0;\n}\n\nh1 {\n    color: #333;\n    text-align: center;\n}',
    runner: (code: string) => {
      return 'CSS styles applied';
    }
  },
  javascript: {
    name: 'JavaScript',
    extension: '.js',
    syntax: 'javascript',
    defaultCode: '// My First JavaScript Code\nconsole.log("Hello, World!");\n\nalert("Welcome to JavaScript!");',
    runner: (code: string) => {
      try {
        // Simple JS execution simulation
        const outputs: string[] = [];
        const lines = code.split('\n');
        
        for (const line of lines) {
          if (line.includes('console.log')) {
            const match = line.match(/console\.log\("([^"]*)"\)/);
            if (match) {
              outputs.push(match[1]);
            }
          }
        }
        
        return outputs.join('\n');
      } catch (error) {
        return `Error: ${error}`;
      }
    }
  },
  typescript: {
    name: 'TypeScript',
    extension: '.ts',
    syntax: 'typescript',
    defaultCode: '// My First TypeScript Code\nconst message: string = "Hello, World!";\nconsole.log(message);\n\nfunction greet(name: string): string {\n    return `Hello, ${name}!`;\n}\n\nalert(greet("Developer"));',
    runner: (code: string) => {
      try {
        // Simple TS execution simulation (after compilation)
        const outputs: string[] = [];
        const lines = code.split('\n');
        
        for (const line of lines) {
          if (line.includes('console.log')) {
            const match = line.match(/console\.log\(([^)]+)\)/);
            if (match) {
              outputs.push(match[1].replace(/"/g, ''));
            }
          }
        }
        
        return outputs.join('\n');
      } catch (error) {
        return `Error: ${error}`;
      }
    }
  },
  pseudocode: {
    name: 'Pseudocode',
    extension: '.pseudo',
    syntax: 'plaintext',
    defaultCode: 'ALGORITHM HelloWorld\nBEGIN\n    OUTPUT "Hello, World!"\nEND',
    runner: (code: string) => {
      // Pseudocode execution simulation
      const outputs: string[] = [];
      const lines = code.split('\n');
      
      for (const line of lines) {
        if (line.includes('OUTPUT')) {
          const match = line.match(/OUTPUT "([^"]*)"$/);
          if (match) {
            outputs.push(match[1]);
          }
        }
      }
      
      return outputs.join('\n');
    }
  }
};

export default function EduPlayGround({
  language,
  lessons,
  currentLessonIndex = 0,
  onLessonChange,
  onCodeRun,
  className = ''
}: EduPlayGroundProps) {
  const [code, setCode] = useState(LANGUAGE_CONFIG[language].defaultCode);
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [showTerminal, setShowTerminal] = useState(false);
  const [terminalOutput, setTerminalOutput] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [currentLesson, setCurrentLesson] = useState(currentLessonIndex);
  
  const codeRef = useRef<HTMLTextAreaElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setCode(LANGUAGE_CONFIG[language].defaultCode);
    setOutput('');
    setTerminalOutput([]);
  }, [language]);

  useEffect(() => {
    setCurrentLesson(currentLessonIndex);
  }, [currentLessonIndex]);

  const runCode = async () => {
    setIsRunning(true);
    setOutput('');
    
    try {
      const result = LANGUAGE_CONFIG[language].runner(code);
      setOutput(result);
      
      // Add to terminal output
      setTerminalOutput(prev => [...prev, `$ ${LANGUAGE_CONFIG[language].name} execution:`, result, '']);
      
      onCodeRun?.(code, result);
    } catch (error) {
      setOutput(`Error: ${error}`);
      setTerminalOutput(prev => [...prev, `$ Error: ${error}`, '']);
    } finally {
      setIsRunning(false);
    }
  };

  const handleLessonChange = (index: number) => {
    setCurrentLesson(index);
    onLessonChange?.(index);
    
    // Update code if lesson has predefined code
    if (lessons[index]?.code) {
      setCode(lessons[index].code!);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const target = e.target as HTMLTextAreaElement;
      const start = target.selectionStart;
      const end = target.selectionEnd;
      
      const newCode = code.substring(0, start) + '    ' + code.substring(end);
      setCode(newCode);
      
      // Set cursor position after tab
      setTimeout(() => {
        target.selectionStart = target.selectionEnd = start + 4;
      }, 0);
    }
  };

  const handleTerminalInput = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      const command = inputValue.trim();
      if (command) {
        setTerminalOutput(prev => [...prev, `$ ${command}`]);
        
        // Process command
        if (command === 'clear') {
          setTerminalOutput([]);
        } else if (command === 'run') {
          runCode();
        } else {
          setTerminalOutput(prev => [...prev, `Command not found: ${command}`, '']);
        }
        
        setInputValue('');
      }
    }
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [terminalOutput]);

  const currentLessonData = lessons[currentLesson];

  return (
    <div className={`flex h-screen bg-gray-900 text-white ${className}`}>
      {/* Left Panel - Lesson Content */}
      <div className="w-1/3 flex flex-col border-r border-gray-700">
        {/* Header */}
        <div className="p-4 border-b border-gray-700">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-sm font-bold">C</span>
            </div>
            <div>
              <h2 className="text-lg font-semibold">Cosmo</h2>
              <p className="text-xs text-gray-400">Just now</p>
            </div>
          </div>
        </div>

        {/* Lesson Content */}
        <div className="flex-1 overflow-y-auto p-4">
          {currentLessonData ? (
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-blue-400">{currentLessonData.title}</h3>
              <div className="bg-gray-800 rounded-lg p-4">
                <p className="text-gray-200 leading-relaxed">{currentLessonData.content}</p>
              </div>
              
              {currentLessonData.expectedOutput && (
                <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                  <h4 className="text-green-400 font-semibold mb-2">Expected Output:</h4>
                  <pre className="text-green-300 text-sm">{currentLessonData.expectedOutput}</pre>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center text-gray-400">
              <p>No lesson content available</p>
            </div>
          )}
        </div>

        {/* Lesson Navigation */}
        <div className="p-4 border-t border-gray-700">
          <div className="flex justify-between items-center">
            <button
              onClick={() => handleLessonChange(Math.max(0, currentLesson - 1))}
              disabled={currentLesson === 0}
              className="px-3 py-1 bg-gray-700 rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-600"
            >
              Previous
            </button>
            <span className="text-sm text-gray-400">
              {currentLesson + 1} / {lessons.length}
            </span>
            <button
              onClick={() => handleLessonChange(Math.min(lessons.length - 1, currentLesson + 1))}
              disabled={currentLesson === lessons.length - 1}
              className="px-3 py-1 bg-gray-700 rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-600"
            >
              Next
            </button>
          </div>
        </div>

        {/* Chat Input */}
        <div className="p-4 border-t border-gray-700">
          <div className="relative">
            <input
              type="text"
              placeholder="Ask me anything..."
              className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
            />
            <button className="absolute right-2 top-2 text-gray-400 hover:text-white">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
          <div className="mt-2 text-xs text-gray-400">
            <span className="flex items-center space-x-1">
              <span>Cosmo Suit Energy</span>
              <span className="text-blue-400">∞</span>
              <span>Unlimited</span>
            </span>
          </div>
        </div>
      </div>

      {/* Right Panel - Code Editor & Terminal */}
      <div className="w-2/3 flex flex-col">
        {/* Top Bar */}
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium">{LANGUAGE_CONFIG[language].name}</span>
              <span className="text-xs text-gray-400">v3.10.6</span>
              <button className="text-gray-400 hover:text-white">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </button>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <span className="text-xs text-green-400">Saved</span>
            <button className="text-gray-400 hover:text-white">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Code Editor */}
        <div className="flex-1 flex flex-col">
          {/* File Tab */}
          <div className="flex items-center bg-gray-800 border-b border-gray-700">
            <div className="flex items-center space-x-2 px-4 py-2 bg-gray-700 border-r border-gray-600">
              <span className="text-sm">solution{LANGUAGE_CONFIG[language].extension}</span>
              <button className="text-gray-400 hover:text-white">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Editor */}
          <div className="flex-1 relative">
            <textarea
              ref={codeRef}
              value={code}
              onChange={(e) => setCode(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-full h-full bg-gray-900 text-white p-4 font-mono text-sm resize-none focus:outline-none"
              placeholder={`Enter your ${LANGUAGE_CONFIG[language].name} code here...`}
            />
            
            {/* Syntax Highlighting Overlay */}
            <div className="absolute inset-0 pointer-events-none">
              <SyntaxHighlighter
                language={LANGUAGE_CONFIG[language].syntax}
                style={tomorrow}
                customStyle={{
                  background: 'transparent',
                  margin: 0,
                  padding: '1rem',
                  fontSize: '0.875rem',
                  lineHeight: '1.5'
                }}
              >
                {code}
              </SyntaxHighlighter>
            </div>
          </div>
        </div>

        {/* Output & Terminal */}
        <div className="h-64 border-t border-gray-700">
          {/* Tabs */}
          <div className="flex items-center bg-gray-800 border-b border-gray-700">
            <button
              onClick={() => setShowTerminal(false)}
              className={`px-4 py-2 text-sm ${!showTerminal ? 'bg-gray-700 text-white' : 'text-gray-400 hover:text-white'}`}
            >
              OUTPUT
            </button>
            <button
              onClick={() => setShowTerminal(true)}
              className={`px-4 py-2 text-sm ${showTerminal ? 'bg-gray-700 text-white' : 'text-gray-400 hover:text-white'}`}
            >
              TERMINAL +
            </button>
          </div>

          {/* Content */}
          <div className="h-full bg-gray-900 p-4 overflow-y-auto">
            {!showTerminal ? (
              <div className="space-y-2">
                {output && (
                  <div className="bg-gray-800 rounded p-3">
                    <pre className="text-green-400 font-mono text-sm">{output}</pre>
                  </div>
                )}
                {!output && (
                  <div className="text-gray-500 text-sm">
                    Run your code to see the output here...
                  </div>
                )}
              </div>
            ) : (
              <div ref={terminalRef} className="h-full flex flex-col">
                <div className="flex-1 space-y-1">
                  {terminalOutput.map((line, index) => (
                    <div key={index} className="text-sm font-mono">
                      <span className="text-gray-400">{line}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-400">$</span>
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleTerminalInput}
                    className="flex-1 bg-transparent text-white outline-none font-mono text-sm"
                    placeholder="Enter command..."
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="p-4 border-t border-gray-700 flex justify-between items-center">
          <div className="flex space-x-2">
            <button className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600">
              Back
            </button>
            <button className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600">
              Submit
            </button>
          </div>
          
          <button
            onClick={runCode}
            disabled={isRunning}
            className="px-6 py-2 bg-green-600 rounded font-semibold hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isRunning ? 'Running...' : 'RUN'}
          </button>
        </div>
      </div>
    </div>
  );
}
