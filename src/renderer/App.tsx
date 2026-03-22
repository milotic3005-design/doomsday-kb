import React, { useState } from 'react'
import ChatPage from './pages/ChatPage'
import BrowserPage from './pages/BrowserPage'
import DashboardPage from './pages/DashboardPage'

type Tab = 'chat' | 'browse' | 'dashboard'

const TABS: { id: Tab; label: string; icon: string }[] = [
  { id: 'chat', label: 'AI Chat', icon: '💬' },
  { id: 'browse', label: 'Knowledge Base', icon: '📚' },
  { id: 'dashboard', label: 'System', icon: '⚙️' }
]

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('chat')

  return (
    <div className="flex h-screen bg-gray-950">
      {/* Sidebar */}
      <nav className="w-56 bg-gray-900 border-r border-gray-800 flex flex-col">
        {/* Logo */}
        <div className="p-4 border-b border-gray-800">
          <h1 className="text-lg font-bold text-amber-500">DOOMSDAY KB</h1>
          <p className="text-xs text-gray-500 mt-1">Offline Knowledge Base</p>
        </div>

        {/* Tab buttons */}
        <div className="flex-1 py-2">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full text-left px-4 py-3 flex items-center gap-3 transition-colors ${
                activeTab === tab.id
                  ? 'bg-gray-800 text-amber-500 border-r-2 border-amber-500'
                  : 'text-gray-400 hover:bg-gray-800/50 hover:text-gray-200'
              }`}
            >
              <span className="text-lg">{tab.icon}</span>
              <span className="text-sm font-medium">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Version */}
        <div className="p-4 border-t border-gray-800">
          <p className="text-xs text-gray-600">v0.1.0 — 100% Offline</p>
        </div>
      </nav>

      {/* Main content */}
      <main className="flex-1 overflow-hidden">
        {activeTab === 'chat' && <ChatPage />}
        {activeTab === 'browse' && <BrowserPage />}
        {activeTab === 'dashboard' && <DashboardPage />}
      </main>
    </div>
  )
}
