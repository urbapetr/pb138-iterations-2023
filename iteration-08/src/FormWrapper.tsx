import type { ReactNode } from "react"

type FormWrapperProps = {
    title: string,
    children: ReactNode
}

export function FormWrapper({ title, children }: FormWrapperProps) {
    return (
        <>
            <h2 style={{ textAlign: "left", margin: 0, marginBottom: "2rem"}}>{title}</h2>
            <div style={{
                gap: "1rem 0.5rem",
                justifyContent: "flex-start",
            }}>
                {children}
            </div>
        </>
    )
}