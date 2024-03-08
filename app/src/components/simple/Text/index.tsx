import { ComponentProps } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const TextVariant = tv({
    base: 'font-normal',
    variants: {
        size: {
            'xl': 'text-2xl',
            'lg': 'text-xl',
            'md': 'text-lg',
            'sm': 'text-md',
            'xs': 'text-sm'
        }
    }
})

type TextProps = ComponentProps<'p'> & VariantProps<typeof TextVariant>

export function Text({ children, size='md', className, ...props }:TextProps) {
    return (
        <p
            className={TextVariant({ size, className })}
            {...props}
        >
            {children}
        </p>
    )
}