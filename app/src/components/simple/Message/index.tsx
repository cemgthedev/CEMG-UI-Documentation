import { ComponentProps } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const MessageVariant = tv({
    base: 'text-md font-normal',
    variants: {
        style: {
            'success': 'text-emerald-500',
            'attention': 'text-yellow-500',
            'danger': 'text-red-500'
        }
    }
})

type MessageProps = ComponentProps<'p'> & VariantProps<typeof MessageVariant>

export function Message({ children, style='success', className, ...props }:MessageProps) {
    return (
        <p
            className={MessageVariant({ style, className })}
            {...props}
        >
            {children}
        </p>
    )
}