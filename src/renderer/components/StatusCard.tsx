import React from 'react'

interface Props {
  title: string
  icon: string
  children: React.ReactNode
  className?: string
}

export default function StatusCard({ title, icon, children, className = '' }: Props) {
  return (
    <div className={`bg-gray-800/60 border border-gray-700/50 rounded-lg p-4 ${className}`}>
      <div className="flex items-center gap-2 mb-3">
        <span className="text-lg">{icon}</span>
        <h3 className="text-sm font-semibold text-gray-300">{title}</h3>
      </div>
      <div className="text-sm">{children}</div>
    </div>
  )
}
