import { InputContainer } from "./styles";
import {InputHTMLAttributes} from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    placeholder: string;
}

export function Input({placeholder, type= 'password'}: InputProps) {
    return (
       <InputContainer>
        <input type={type} placeholder={placeholder} />
       </InputContainer>
    )
}