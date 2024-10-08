import { InputContainer } from "./styles";
import {InputHTMLAttributes} from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    placeholder: string;
}

export function Input({placeholder, type= 'password', ...rest}: InputProps) {
    return (
       <InputContainer >
        <input {...rest} type={type} placeholder={placeholder} />
       </InputContainer>
    )
}