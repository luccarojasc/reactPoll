import { useState } from "react"

export function App() {
  const [selected, setSelected] = useState(2);
  const [open, setOpen] = useState(false);

  return(
    <div className="mx-auto max-w-screen-2xl h-screen flex">
      <div className="min-w-96 shadow-md shadow-stone-300">
        <h1 className="text-3xl font-bold mt-8 ml-9">Crie uma enquete!</h1>
        <form>
          <div>
            <h1>Título</h1>
            <input></input>
          </div>
          <div>
            <h1>Qtd. de Opções</h1>
            <div className="bg-rose-50 w-48 h-8 pl-1 flex items-center justify-between select-none" onClick={()=> setOpen(!open)}>
              {selected}
              <img src="./downArrow.png" className={`${(open) && "rotate-180"} transition-all`} />
            </div>
            <ul className={'border-b-2 bg-rose-50 border-rose-900 overflow-hidden w-48 transition-all ' + (open ? 'max-h-60' : 'max-h-0')}>
              <li className="pl-1 hover:bg-rose-900 hover:text-rose-50 select-none" onClick={()=> {setSelected(2); setOpen(false)}}>2</li>
              <li className="pl-1 hover:bg-rose-900 hover:text-rose-50 select-none" onClick={()=> {setSelected(3); setOpen(false)}}>3</li>
              <li className="pl-1 hover:bg-rose-900 hover:text-rose-50 select-none" onClick={()=> {setSelected(4); setOpen(false)}}>4</li>
              <li className="pl-1 hover:bg-rose-900 hover:text-rose-50 select-none" onClick={()=> {setSelected(5); setOpen(false)}}>5</li>
            </ul>
          </div>
        </form>
      </div>
      <div className="min-w-96 shadow-inner shadow-stone-300">
        <h1>Teste2</h1>
      </div>
      <div className="w-full shadow-md shadow-stone-300 mx-auto">
        <h1>Teste3</h1>
      </div>
    </div>
  )
}

export default App
