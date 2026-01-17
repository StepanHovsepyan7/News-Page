import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Cards from './components/Cards';




function App() {

  const [data,setData] = useState([])
  const [searched, setSearchedData] = useState('')

  useEffect(()=>{
    const handle = setTimeout (()=>{
      fetch('https://cloud.codesupply.co/endpoint/react/data.json')
      .then((res) => res.json())
      .then((res) => setData(res))
    },1000)

    return () => clearTimeout(handle)
  },[])

  const filteredData = data.filter((e) => {
    return(
      e.title.toLowerCase().includes(searched.toLowerCase())
    )
  })

  return (
    <div>
      <Header/>
      <div className='flex justify-center'>
        <input 
          value={searched} 
          onChange={(e) => setSearchedData(e.target.value)} 
          type="text" 
          className='inpSearch' 
          placeholder='Search News..'
        />
      </div>
  <div className="max-w-[1160px] mx-auto px-4 mt-[48px]">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[40px] gap-y-[60px]">
    {filteredData.map((e,i) => (
      <Cards
        key={i}
        img={e.img}
        tags={e.tags}
        title={e.title}
        autor={e.autor}
        date={e.date}
        views={e.views}
        text={e.text}
      />
    ))}
  </div>
</div>

    </div>
  );
}

export default App;
