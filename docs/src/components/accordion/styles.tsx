import styled from '@emotion/styled'

export const Summary = styled('div')({
	padding: '12px 8px',
	gap: 8,
	cursor: 'pointer',
	display: 'flex',
	alignItems: 'center',
	color: 'rgba(0, 0, 0, 0.87)',
	backgroundColor: 'rgba(0, 0, 0, .03)'
})

export const Details = styled('div')({
	padding: 16,
	fontSize: 16,
	color: 'rgba(0, 0, 0, 0.87)',
	borderTop: '1px solid rgba(0, 0, 0, .125)'
})

export const Wrapper = styled('div')({
	border: '1px solid rgba(0, 0, 0, .125)',
	'&:not(:last-child)': {
		borderBottom: 0
	},
	'&:before': {
		display: 'none'
	}
})

interface Props {
	expanded: boolean
}
export const Icon = styled('span')(({ expanded }: Props) => ({
	transition: 'transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
	transform: `rotate(${expanded ? 90 : 0}deg)`,
	fontSize: '0.9rem',
	color: 'rgba(0, 0, 0, 0.54)'
}))
