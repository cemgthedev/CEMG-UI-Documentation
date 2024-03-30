import { ComponentProps } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const TextareaVariants = tv({
    base: 'w-full p-2 border-2 border-zinc-950 rounded-[4px] min-h-[44px] outline-none overflow-auto duration-150 ease-linear',
    variants: {
        style: {
            'primary': 'hover:border-cyan-500 focus:border-cyan-400',
            'secondary': 'hover:border-violet-500 focus:border-violet-400'
        }
    }
})

type TextareaProps = ComponentProps<'textarea'> & VariantProps<typeof TextareaVariants>

export function Textarea({ placeholder, style='primary', className, ...props }:TextareaProps) {
    return (
        <textarea
            placeholder={placeholder}
            className={TextareaVariants({ style, className })}
            {...props}
        />
    )
}