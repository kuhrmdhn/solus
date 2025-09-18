import React from 'react'

type Props = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode
}

export default function SectionHeading({ children, className, ...props }: Props) {
  return (
    <div className={`text-3xl lg:text-4xl xl:text-5xl font-bold text-primary ${className}`} {...props}>{children}</div>
  )
}
