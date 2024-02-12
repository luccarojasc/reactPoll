import { Create } from "./sections/create";
import { Select } from "./sections/select";



export function App() {


  return(
    <div className="mx-auto max-w-screen-2xl h-screen flex">
      <div className="min-w-96 shadow-md shadow-stone-300">
        <Create />
      </div>
      <div className="min-w-96 shadow-inner shadow-stone-300">
        <Select />
      </div>
      <div className="w-full shadow-md shadow-stone-300 mx-auto">
        <h1>Teste3</h1>
      </div>
    </div>
  )
}
