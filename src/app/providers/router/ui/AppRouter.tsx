import {Route, Routes} from 'react-router-dom'
import {routeConfig} from '../config/routeConfig/routeConfig'
import {Suspense} from 'react'


export const AppRouter = () => {
  return(
    <Suspense>
      <Routes>
        {Object.values(routeConfig).map(({path: path, element: element}) => (
          <Route key={path} element={element} path={path}/>
        ))}
      </Routes>
    </Suspense>
  )
}
