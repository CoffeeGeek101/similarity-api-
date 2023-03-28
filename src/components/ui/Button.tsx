import { FC, HTMLAttributes, forwardRef } from "react"
import { VariantProps, cva } from "class-variance-authority"
import { cName } from "@/lib/utils"

const buttonVariantProps = cva(
    'py-4 px-2 rounded-md font-semibold font-mono',
    {
        variants : {
            size:{
                default : 'min-w-[100px] lg:min-w-[150px]',
                sm: 'min-w-[80px] lg:min-w-[100px]',
                lg: 'min-w-[200px] lg:min-w-[280px]',
            },
            status :{
                default : 'bg-blue-500, text-white',
                success : 'bg-green-600 text-white',
                warning : 'bg-red-500 text-white'
            }
        },
        defaultVariants :{
            size : 'default',
            status : 'default'
        }
    }
)



interface ButtonProps extends HTMLAttributes<HTMLButtonElement>,
VariantProps<typeof buttonVariantProps> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({className, size, status, children,...props},ref)=>{
        return(
            <button
            ref={ref}
            {...props}
            className={cName(buttonVariantProps({className,size,status}))}
            >
                {children}
            </button>
        )
    }
)


// for debugging    
Button.displayName = 'Button';

export default Button;