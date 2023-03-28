import { ClassValue, clsx } from "clsx";
import {twMerge} from 'tailwind-merge'
export function cName(...inputs : ClassValue[]){
    return twMerge(clsx(inputs))
}