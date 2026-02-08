import type { ButtonProps } from "@/types"

const Button = ({ title, style, action }: ButtonProps) => {
    return (
        <>
            <button
                className={
                    style == "primary" ?
                        "px-8 py-3 bg-emerald-600 hover:bg-emerald-700 rounded-full transition-all transform hover:scale-105" :
                        "px-8 py-3 border border-emerald-600 hover:bg-emerald-600/20 rounded-full transition-all transform hover:scale-105"
                }
                onClick={action}
            >
                {title}
            </button>
        </> 
    )
}

export default Button