import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'
import { tv, VariantProps } from 'tailwind-variants'

const CustomInputVariants = tv({
    slots: {
        customInputStyle: 'h-fit flex items-center bg-white w-full border-2 border-zinc-950 rounded-[4px] overflow-hidden duration-150 ease-linear',
        customInputFieldStyle: 'bg-transparent p-2 outline-none w-full min-h-[40px] overflow-ellipsis',
        customInputVisualStyle: 'p-2 w-fit h-fit'
    },
    variants: {
        style: {
            'primary': {
                customInputStyle: 'has-[:hover]:border-cyan-500 has-[:focus]:border-cyan-400'
            },
            'secondary': {
                customInputStyle: 'has-[:hover]:border-violet-500 has-[:focus]:border-violet-400'
            }
        }
    }
})

type CustomInputProps = ComponentProps<'div'> & VariantProps<typeof CustomInputVariants>

function CustomInput({ style='primary', className, ...props }:CustomInputProps) {
    const {
        customInputStyle
    } = CustomInputVariants({ style })
    
    return (
        <div
            className={twMerge(customInputStyle(), className)}
            {...props}
        />
    )
}

type CustomInputFieldProps = ComponentProps<'input'> & VariantProps<typeof CustomInputVariants>

CustomInput.Field = function CustomInputField({ placeholder, className, ...props }:CustomInputFieldProps) {
    const {
        customInputFieldStyle
    } = CustomInputVariants()
    
    return (
        <input
            placeholder={placeholder}
            className={twMerge(customInputFieldStyle(), className)}
            {...props}
        />
    )
}

type CustomInputVisualProps = ComponentProps<'div'> & VariantProps<typeof CustomInputVariants>

CustomInput.Visual = function CustomInputVisual({ className, ...props }:CustomInputVisualProps) {
    const {
        customInputVisualStyle
    } = CustomInputVariants()
    
    return (
        <div
            className={twMerge(customInputVisualStyle(), className)}
            {...props}
        />
    )
}

export { CustomInput }

