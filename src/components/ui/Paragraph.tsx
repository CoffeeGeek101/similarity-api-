import {FC, HTMLAttributes, forwardRef} from 'react'
import {VariantProps, cva} from 'class-variance-authority'
import { cName } from '@/lib/utils'

const paragraphVarients = cva(
    'max-w-prose text-slate-700 dark:text-slate-300 mb-2 text-centre',
    {                                                   
        variants :{
            size :{
                default : 'text-base lg:text-6xl',
                sm: 'text-sm lg:text-6xl',
            }
        },
        defaultVariants:{
            size : 'default',
        }
    }
)

interface ParagraphProps
 extends HTMLAttributes<HTMLParagraphElement>,
 VariantProps<typeof paragraphVarients>{}

const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(
    ({className, size, children, ...props}, ref) =>{
        return(
            <p 
            ref={ref}
            {...props}
            className={cName(paragraphVarients({size, className}))}
            >
            {children}
            </p>
        )
    }
)

//for debugging purposes
Paragraph.displayName = 'Paragraph'


export default Paragraph;