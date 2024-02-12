import { useState } from "react"


export function Create(){
    const [selected, setSelected] = useState(2);
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [optOne, setOptOne] = useState('');
    const [optTwo, setOptTwo] = useState('');
    const [optThree, setOptThree] = useState('');
    const [optFour, setOptFour] = useState('');
    const [optFive, setOptFive] = useState('');

    const handleSubmit = async () => {
      console.log(title, optOne, optTwo, optThree, optFour, optFive);
    }

    return(
        <div>
        <h1 className="text-3xl font-extrabold mt-8 ml-9">Crie uma enquete!</h1>
        <form className="ml-9 mt-16">
          <div>
            <h1 className="font-bold text-2xl mb-4">Título</h1>
            <input placeholder="Digite aqui" className="mb-16 border-b-2 bg-rose-50 border-rose-900 text-rose-900 h-10 focus:outline-none placeholder-rose-900 placeholder-opacity-25 focus:border-rose-700" onChange={(e)=> setTitle(e.target.value)}/>
          </div>
          <div>
            <h1 className="font-bold text-2xl mb-8">Qtd. de Opções</h1>
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
            { selected == 2 &&
                <ul className="mt-24">
                    <li><input placeholder="Opção 1" className="mb-8 border-b-2 bg-rose-50 border-rose-900 text-rose-900 h-10 focus:outline-none placeholder-rose-900 placeholder-opacity-25 focus:border-rose-700" onChange={(e)=> setOptOne(e.target.value)}/></li>
                    <li><input placeholder="Opção 2" className="border-b-2 bg-rose-50 border-rose-900 text-rose-900 h-10 focus:outline-none placeholder-rose-900 placeholder-opacity-25 focus:border-rose-700" onChange={(e)=> setOptTwo(e.target.value)}/></li>
                </ul> 
            } { selected == 3 &&         
                <ul className="mt-24">
                    <li><input placeholder="Opção 1" className="mb-8 border-b-2 bg-rose-50 border-rose-900 text-rose-900 h-10 focus:outline-none placeholder-rose-900 placeholder-opacity-25 focus:border-rose-700" onChange={(e)=> setOptOne(e.target.value)}/></li>
                    <li><input placeholder="Opção 2" className="mb-8 border-b-2 bg-rose-50 border-rose-900 text-rose-900 h-10 focus:outline-none placeholder-rose-900 placeholder-opacity-25 focus:border-rose-700" onChange={(e)=> setOptTwo(e.target.value)}/></li>
                    <li><input placeholder="Opção 3" className="border-b-2 bg-rose-50 border-rose-900 text-rose-900 h-10 focus:outline-none placeholder-rose-900 placeholder-opacity-25 focus:border-rose-700" onChange={(e)=> setOptThree(e.target.value)}/></li>
                </ul> 
            } { selected == 4 &&         
                <ul className="mt-24">
                    <li><input placeholder="Opção 1" className="mb-8 border-b-2 bg-rose-50 border-rose-900 text-rose-900 h-10 focus:outline-none placeholder-rose-900 placeholder-opacity-25 focus:border-rose-700" onChange={(e)=> setOptOne(e.target.value)}/></li>
                    <li><input placeholder="Opção 2" className="mb-8 border-b-2 bg-rose-50 border-rose-900 text-rose-900 h-10 focus:outline-none placeholder-rose-900 placeholder-opacity-25 focus:border-rose-700" onChange={(e)=> setOptTwo(e.target.value)}/></li>
                    <li><input placeholder="Opção 3" className="mb-8 border-b-2 bg-rose-50 border-rose-900 text-rose-900 h-10 focus:outline-none placeholder-rose-900 placeholder-opacity-25 focus:border-rose-700" onChange={(e)=> setOptThree(e.target.value)}/></li>
                    <li><input placeholder="Opção 4" className="border-b-2 bg-rose-50 border-rose-900 text-rose-900 h-10 focus:outline-none placeholder-rose-900 placeholder-opacity-25 focus:border-rose-700" onChange={(e)=> setOptFour(e.target.value)}/></li>
                </ul> 
            } { selected == 5 &&         
                <ul className="mt-10">
                    <li><input placeholder="Opção 1" className="mb-8 border-b-2 bg-rose-50 border-rose-900 text-rose-900 h-10 focus:outline-none placeholder-rose-900 placeholder-opacity-25 focus:border-rose-700" onChange={(e)=> setOptOne(e.target.value)}/></li>
                    <li><input placeholder="Opção 2" className="mb-8 border-b-2 bg-rose-50 border-rose-900 text-rose-900 h-10 focus:outline-none placeholder-rose-900 placeholder-opacity-25 focus:border-rose-700" onChange={(e)=> setOptTwo(e.target.value)}/></li>
                    <li><input placeholder="Opção 3" className="mb-8 border-b-2 bg-rose-50 border-rose-900 text-rose-900 h-10 focus:outline-none placeholder-rose-900 placeholder-opacity-25 focus:border-rose-700" onChange={(e)=> setOptThree(e.target.value)}/></li>
                    <li><input placeholder="Opção 4" className="mb-8 border-b-2 bg-rose-50 border-rose-900 text-rose-900 h-10 focus:outline-none placeholder-rose-900 placeholder-opacity-25 focus:border-rose-700" onChange={(e)=> setOptFour(e.target.value)}/></li>
                    <li><input placeholder="Opção 5" className="border-b-2 bg-rose-50 border-rose-900 text-rose-900 h-10 focus:outline-none placeholder-rose-900 placeholder-opacity-25 focus:border-rose-700" onChange={(e)=> setOptFive(e.target.value)}/></li>
            </ul>} 
           <button onClick={handleSubmit} disabled={!title || !optOne || !optTwo || (selected == 3) && !optThree || (selected == 4) && !optFour || (selected == 5) && !optFive} className="mt-10 w-72 bg-rose-50 border-2 border-rose-900 rounded-xl h-12 font-bold text-xl enabled:hover:bg-rose-900 enabled:hover:text-rose-50 enabled:focus:bg-rose-800 enabled:focus:text-rose-50 disabled:opacity-25"><h1>CRIAR</h1></button>
        </form>
      </div>
    )
}