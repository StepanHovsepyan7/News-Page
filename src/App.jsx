import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Cards from './components/Cards';
import Popup from './components/Popup';

function App() {

  const [data,setData] = useState([])
  const [searched, setSearchedData] = useState('');
  const [popupData,setPopupData] = useState(null)

  useEffect(()=>{
      fetch('https://cloud.codesupply.co/endpoint/react/data.json')
      .then((res) => res.json())
      .then((res) => setData(res))
  },[])

  const filteredData = data.filter((e) => {
    return(
      e.title.toLowerCase().includes(searched.toLowerCase().trim())
    )
  })

  useEffect(()=>{
    if(popupData){
      return document.body.classList.add('no-scroll')
    }else{
      return document.body.classList.remove('no-scroll')
    }
  },[popupData])

  return (
    <div>
     {popupData && <Popup title={popupData.title} text={popupData.text} close={() => setPopupData(null)}/>}
      <Header/>
      <div className='flex justify-center'>
        <input 
          value={searched} 
          onChange={(e) => setSearchedData(e.target.value)} 
          type="text" 
          className='inpSearch mt-5' 
          placeholder='Search News..'
        />
      </div>
  <div className="max-w-[1160px] mx-auto px-4 mt-[48px]">
    {searched && filteredData.length === 0 ? (
    <p className="text-center text-gray-500 col-span-full">
      Nothing found
    </p>
    ):<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[40px] gap-y-[60px]">
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
        onClick={() => setPopupData(e)} 
      />
    ))}
  </div>}
</div>

    </div>
  );
}

export default App;
