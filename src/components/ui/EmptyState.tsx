import React from 'react'
import { Link } from 'react-router-dom'
import { PlusIcon } from '@heroicons/react/24/outline'

interface EmptyStateProps {
  title: string
  description: string
  icon?: React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement> & { title?: string, titleId?: string }>
  action?: {
    label: string
    href: string
    icon?: React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement> & { title?: string, titleId?: string }>
  }
}

export function EmptyState({ 
  title, 
  description, 
  icon: Icon, 
  action 
}: EmptyStateProps) {
  return (
    <div className="text-center py-12 px-4 bg-white rounded-lg border-2 border-dashed border-gray-300">
      {Icon && (
        <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-primary-100 mb-4">
          <Icon className="h-6 w-6 text-primary-600" aria-hidden="true" />
        </div>
      )}
      <h3 className="mt-2 text-sm font-semibold text-gray-900">{title}</h3>
      <p className="mt-1 text-sm text-gray-500">{description}</p>
      {action && (
        <div className="mt-6">
          <Link
            to={action.href}
            className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
          >
            {action.icon ? (
              <action.icon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
            ) : (
              <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
            )}
            {action.label}
          </Link>
        </div>
      )}
    </div>
  )
}
