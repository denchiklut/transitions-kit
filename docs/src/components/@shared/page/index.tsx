import { FC } from 'react'

interface Props {
	title: string
	children: JSX.Element
}
export const Page: FC<Props> = ({ children }) => <div>{children}</div>
