import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'
import { tv, VariantProps } from 'tailwind-variants'

const SelectVariants = tv({
    slots: {
        selectStyle: 'bg-white w-full p-2 pt-3 border-2 border-zinc-950 rounded-[4px] min-h-[44px] outline-none duration-150 ease-linear items-center',
        selectItemStyle: 'text-zinc-950 p-2 font-bold rounded-[4px] flex gap-1 justify-center items-center w-full duration-150 ease-linear'
    },
    variants: {
        style: {
            'primary': {
                selectStyle: 'hover:border-cyan-500 focus:border-cyan-400'
            },
            'secondary': {
                selectStyle: 'hover:border-violet-500 focus:border-violet-400'
            }
        }
    }
})

type SelectProps = ComponentProps<'select'> & VariantProps<typeof SelectVariants>

function Select({ children, style, className, ...props }: SelectProps) {
    const { 
        selectStyle 
    } = SelectVariants({ style })

    return (
        <select
            className={twMerge(selectStyle(), className)}
            {...props}
        >
            {children}
        </select>
    );
}

type SelectItemProps = ComponentProps<'option'> & VariantProps<typeof SelectVariants>

Select.Item = function SelectItem({ children, className, ...props }:SelectItemProps) {
    const { selectItemStyle } = SelectVariants()
    
    return (
        <option
            className={twMerge(selectItemStyle(), className)}
            {...props}
        >
            {children}
        </option>
    )
}

export { Select }

