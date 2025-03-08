"use client"

import {useState, FormEvent} from "react"
import {useRouter} from 'next/navigation';
// this si for actually sending parameter from one oage to another
// formevent describing the type of the evnt would be as for
// ts we need to define the type of our variable
export default function Home() {
  const [inputVal, setInputVal] = useState("");

  const {push}=useRouter();
  // this function helps in redirecting to another route

  const handleSubmit= (event: FormEvent) => {
    event.preventDefault(); 
    // or else react usually refreshes the page
    push(`/prediction/${inputVal}`)
    // whatever the input i gave taking that it will route
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-6 shadow-md bg-white rounded-md w-96 text-center">
      <h1 className="text-2xl font-semibold mb-4 text-black">
       Enter Your name</h1>
      
      <form onSubmit={handleSubmit} className="space-y-3 flex-col">
        <input type="text" placeholder="Type your name.." 
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded text-black"/>
        <button type="submit"
        className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
         Predict Data</button>
      </form>
    </div>
    </div>
  );
}
