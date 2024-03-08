import { ComponentProps } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const SelectItemVariant = tv({
    base: 'text-zinc-950 p-2 font-bold rounded-[4px] flex gap-1 justify-center items-center w-full border-2 border-transparent',
    variants: {
        hoverStyle: {
            'transparent': 'hover:bg-slate-50',
            'primary': 'hover:text-white hover:bg-cyan-400',
            'secondary': 'hover:text-white hover:bg-violet-400',
            'dark': 'hover:text-white hover:bg-zinc-950',
            'primary-outline': 'hover:border-cyan-500 ',
            'secondary-outline': 'hover:border-violet-500',
            'dark-outline': 'hover:border-zinc-950',
        }
    }
})

type SelectItemProps = ComponentProps<'option'> & VariantProps<typeof SelectItemVariant>

export function SelectItem({ children, hoverStyle, className, ...props }:SelectItemProps) {
    return (
        <option
            className={SelectItemVariant({ hoverStyle, className })}
            {...props}
        >
            {children}
        </option>
    )
}