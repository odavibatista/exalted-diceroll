import React from 'react'

export function Page    ({children})    {
    const sec = "bg-slate-900 min-h-screen"
    return  (
        <section className={sec}>
            {children}
        </section>
    )
}