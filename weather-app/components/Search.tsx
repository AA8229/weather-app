import axios from 'axios'
import { useState } from 'react'
import { BsSearch } from 'react-icons/bs'

export default function Search(props) {

    const [city, setCity] = useState('');
    const [weather, setWeather] = useState('');

    const url = `http://api.weatherapi.com/v1/current.json?q=${city}&key=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;

    const enteredCityHandler = e => {
        setCity(e.target.value);
    }

    const fetchWeatherHandler = e => {
        e.preventDefault();
        axios.get(url).then(response => {
            setWeather(response.data);
            console.log(response.data);
        }).catch(err => {
            setWeather('');
            console.log(err);
            alert('Please enter a valid city name.');
        })
        setCity('');
    }

    props.onSaveSearchData(weather);

    return (
        <div>
            <div className='relative flex justify-between items-center max-w-[500px] w-full m-auto pt-4 text-white z-10'>
                <form onSubmit={fetchWeatherHandler} className='flex justify-between items-center w-full m-auto p-3 bg-transparent border border-gray-300 text-white rounded-2xl'>
                    <div>
                        <input onChange={enteredCityHandler} className='bg-transparent border-none text-white focus:outline-none text-2xl' type='text' placeholder='Search city' />
                    </div>
                    <button onClick={fetchWeatherHandler}><BsSearch size={20} /></button>
                </form>
            </div>
        </div>
    )
}
