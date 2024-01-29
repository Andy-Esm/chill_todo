import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from '../config/routeConfig/routeConfig'

export const AppRouter = () => {
  return (
    <Suspense>
      <Routes>
        {Object.values(routeConfig).map(({ element: element, path: path }) => (
          <Route element={element} key={path} path={path} />
        ))}
      </Routes>
    </Suspense>
  )
}
