import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'
import { tv, VariantProps } from 'tailwind-variants'

const CustomTextareaVariants = tv({
    slots: {
        customTextareaStyle: 'flex items-center bg-white w-full h-fit border-2 border-zinc-950 rounded-[4px] overflow-hidden duration-150 ease-linear',
        customTextareaFieldStyle: 'p-2 bg-transparent outline-none overflow-auto w-full min-h-[44px]',
        customTextareaVisualStyle: 'p-2 w-fit h-fit'
    },
    variants: {
        style: {
            'primary': {
                customTextareaStyle: 'has-[:hover]:border-cyan-500 has-[:focus]:border-cyan-400'
            },
            'secondary': {
                customTextareaStyle: 'has-[:hover]:border-violet-500 has-[:focus]:border-violet-400'
            }
        }
    }
})

type CustomTextareaProps = ComponentProps<'div'> & VariantProps<typeof CustomTextareaVariants>

function CustomTextarea({ style='primary', className, ...props }:CustomTextareaProps) {
    const {
        customTextareaStyle
    } = CustomTextareaVariants({ style })
    
    return (
        <div
            className={twMerge(customTextareaStyle(), className)}
            {...props}
        />
    )
}

type CustomTextareaFieldProps = ComponentProps<'textarea'> & VariantProps<typeof CustomTextareaVariants>

CustomTextarea.Field = function CustomInputField({ placeholder, rows=3, className, ...props }:CustomTextareaFieldProps) {
    const {
        customTextareaFieldStyle
    } = CustomTextareaVariants()
    
    return (
        <textarea
            placeholder={placeholder}
            className={twMerge(customTextareaFieldStyle(), className)}
            rows={rows}
            {...props}
        />
    )
}

type CustomTextareaVisualProps = ComponentProps<'div'> & VariantProps<typeof CustomTextareaVariants>

CustomTextarea.Visual = function CustomTextareaVisual({ className, ...props }:CustomTextareaProps) {
    const {
        customTextareaVisualStyle
    } = CustomTextareaVariants()
    
    return (
        <div
            className={twMerge(customTextareaVisualStyle(), className)}
            {...props}
        />
    )
}

export { CustomTextarea }

