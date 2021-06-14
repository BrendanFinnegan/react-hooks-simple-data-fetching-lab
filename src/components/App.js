// create your App component here
import { useEffect, useState } from 'react'


function App () {

    const [dogImg, setDogImg] = useState(null)

useEffect(() => fetch(`https://dog.ceo/api/breeds/image/random`)
    .then(res => res.json())
    .then( data => {
        console.log(data)
        setDogImg(data.message)
    }), [])

if (!dogImg) return <p>Loading...</p>;
return (
    <img src={dogImg} />
)
}
export default App