import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Layout } from '@shared/layout'
import { Loader } from '@shared/loader'

const Home = lazy(() => import('pages/home'))
const NotFound = lazy(() => import('pages/not-found'))

export const App = () => (
	<Suspense fallback={<Loader />}>
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />
				<Route path='*' element={<NotFound />} />
			</Route>
		</Routes>
	</Suspense>
)
