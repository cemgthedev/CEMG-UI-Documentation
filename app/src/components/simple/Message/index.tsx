import { ComponentProps } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const MessageVariants = tv({
    base: 'text-md font-normal',
    variants: {
        style: {
            'success': 'text-emerald-500',
            'attention': 'text-yellow-500',
            'danger': 'text-red-500'
        }
    }
})

type MessageProps = ComponentProps<'p'> & VariantProps<typeof MessageVariants>

export function Message({ children, style='success', className, ...props }:MessageProps) {
    return (
        <p
            className={MessageVariants({ style, className })}
            {...props}
        >
            {children}
        </p>
    )
}