import { Create } from "./sections/create"
import { Select } from "./sections/select"
import { Show } from "./sections/show"


export function App() {


  return(
    <div className="mx-auto max-w-screen-2xl shadow-md h-screen flex overflow-hidden">
      <div className="min-w-96 shadow-md shadow-stone-300">
        <Create />
      </div>
      <div className="min-w-96 shadow-inner shadow-stone-300">
        <Select />
      </div>
      <div className="w-full shadow-md shadow-stone-300 mx-auto">
      <Show />
      </div>
    </div>
  )
}
