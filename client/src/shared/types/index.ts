import React, {InputHTMLAttributes} from "react";

export interface IModal {
    children: React.ReactNode,
    showModal: boolean,
    setShowModal: (value:boolean) => void
}

export interface IButton extends
    React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, React.AriaAttributes  {}

export interface IInput extends InputHTMLAttributes<HTMLInputElement>{
    name: string,
    label?: string
}

