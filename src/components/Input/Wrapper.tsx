import { ReactNode } from 'react'

export const Wrapper = ({
  flex,
  children,
}: {
  flex: 'row' | 'col'
  children: ReactNode
}) => {
  const flexTypes = {
    row: 'flex gap-[8px]',
    col: 'flex flex-col gap-[8px]',
  }
  return <div className={flexTypes[flex]}>{children}</div>
}
