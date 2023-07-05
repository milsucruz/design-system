import * as ToastPrimitive from '@radix-ui/react-toast'
import { X } from 'phosphor-react'
import {
  ToastClose,
  ToastDescription,
  ToastContainer,
  ToastTitle,
  ToastViewPort,
} from './styles'
import { ComponentProps } from 'react'

export interface ToastProps extends ComponentProps<typeof ToastContainer> {
  title: string
  description?: string
}

export function Toast({ title, description, ...props }: ToastProps) {
  return (
    <ToastPrimitive.Provider>
      <ToastContainer {...props}>
        <ToastTitle>{title}</ToastTitle>
        {description && <ToastDescription>{description}</ToastDescription>}
        <ToastClose>
          <X weight="light" size={20} />
        </ToastClose>
      </ToastContainer>

      <ToastViewPort />
    </ToastPrimitive.Provider>
  )
}

Toast.displayName = 'Toast'
