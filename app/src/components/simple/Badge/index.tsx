import { ComponentProps } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const BadgeVariant = tv({
    base: 'py-1 px-2 font-bold rounded-[4px] flex gap-1 justify-center items-center w-fit duration-150 ease-linear',
    variants: {
        style: {
            'primary': 'bg-cyan-500 text-white hover:bg-cyan-400',
            'secondary': 'bg-violet-500 text-white hover:bg-violet-400',
            'dark': 'bg-zinc-950 text-white hover:bg-zinc-700',
            'success': 'bg-emerald-500 text-white hover:bg-emerald-400',
            'attention': 'bg-yellow-500 text-white hover:bg-yellow-400',
            'danger': 'bg-red-500 text-white hover:bg-red-400',
            'primary-outline': 'border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white',
            'secondary-outline': 'border-2 border-violet-500 text-violet-500 hover:bg-violet-500 hover:text-white',
            'dark-outline': 'border-2 border-zinc-950 text-zinc-950 hover:bg-zinc-950 hover:text-white',
            'success-outline': 'border-2 border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white',
            'attention-outline': 'border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white',
            'danger-outline': 'border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white'
        }
    }
})

type BadgeProps = ComponentProps<'div'> & VariantProps<typeof BadgeVariant>

export function Badge({ children, style, className, ...props }:BadgeProps) {
    return (
        <div
            className={BadgeVariant({ style, className })}
            {...props}
        >
            {children}
        </div>
    )
}