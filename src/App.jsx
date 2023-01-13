import { RouterProvider } from "react-router-dom"
import { router } from "./router/Router"



function App() {
  return (
    <div className="overflow-hidden">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
