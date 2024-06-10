import React from 'react'
import { CardWrapper } from './cardWrapper'
import { ExclamationTriangleIcon } from '@radix-ui/react-icons'
function ErrorCard() {
  return (
    <CardWrapper
      headerLabel="Oops! Something went wrong"
      backButtonLabel="Back to login"
      backButtonHref={'/auth/login'}
    >
      <div className="flex items-center justify-center">
        <ExclamationTriangleIcon className="h-8 w-8 text-destructive" />
      </div>
    </CardWrapper>
  )
}

export default ErrorCard
