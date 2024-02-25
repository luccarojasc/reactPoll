import axios from "axios"
import { useState, useEffect } from "react"

const api = axios.create({
    baseURL: 'http://localhost:3333'
})

export function Select() {
    const url = '/polls';
    const [enquetes, setEnquetes] = useState([]);
    const [pollId, setPollId] = useState('');

    useEffect(() => {
        api.get(url).then((response) => {
            setEnquetes(response.data.polls)
            console.log(response.data.polls)
        })
    }, [])

    return (
        <div>
            <h1 className="text-3xl font-extrabold mt-8 flex justify-center">Enquetes</h1>
            <div className="h-screen flex justify-center mt-8">
                <ul className="overflow-y-auto scrollbar-thin scrollbar-track-rose-50 scrollbar-thumb-rose-900 scrollbar- border-2 border-rose-900 rounded-md w-11/12 h-5/6">
                    {enquetes.map((enquete) => (
                        <li key={enquete.id} className="flex justify-center">
                            <div className="border-b-2 border-rose-800 w-11/12 h-32 mt-3 mb-3">
                                <h1 className="font-bold flex justify-center text-xl text-rose-800">{enquete.title}</h1>
                                <button className="pb-7 ml-4 h-6 w-72 mt-8 bg-rose-900 text-rose-50 rounded-xl font-bold text-lg hover:bg-rose-700" onClick={() => setPollId(enquete.id)}>SELECIONAR</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export function Selected(pollId) {
    const url = `/polls/${pollId}`
    const [selectedpoll, setSelectedPoll] = useState([])
    
    useEffect(() => {
        api.get(url).then((response) => {
            setSelectedPoll(response.data.poll)
            console.log(response.data.poll)
        })
    }, [])
}