import {FC, HTMLAttributes, forwardRef} from 'react'
import {VariantProps, cva} from 'class-variance-authority'
import { cName } from '@/lib/utils'

const headerVarients = cva(
    'text-black dark:text-white text-center lg:text-left font-extrabold leading-tight tracking-tighter',
    {
        variants :{
            size :{
                default: 'text-4xl md:text-5xl lg:text-6xl',
                lg: 'text-5xl md:text-6xl lg:text-7xl',
                sm: 'text-2xl md:text-3xl lg:text-4xl',
            }
        },
        defaultVariants:{
            size : 'default',
        }
    }
)

interface headerProps
 extends HTMLAttributes<HTMLHeadingElement>,
 VariantProps<typeof headerVarients>{}

const Header = forwardRef<HTMLHeadingElement, headerProps>(
    ({className, size, children, ...props}, ref) =>{
        return(
            <h1
            ref={ref}
            {...props}
            className={cName(headerVarients({size, className}))}
            >
            {children}
            </h1>
        )
    }
)

//for debugging purposes
Header.displayName = 'Header'


export default Header;
