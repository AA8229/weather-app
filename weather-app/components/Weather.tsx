export default function Weather ({ data }) {

    const cityName = data.location.name,
        weatherCategory = data.current.condition.text,
        weatherTemp = data.current.temp_c,
        weatherFeelsLike = data.current.feelslike_c,
        weatherHumidity = data.current.humidity,
        weatherWindSpeed = data.current.wind_mph;

    return (
        <div className='relative flex flex-col justify-between max-w-[500px] w-full h-[90vh] m-auto p-4 text-gray-300 z-10'>
            {/* Weather Summary */}
            <div className='relative flex justify-between pt-12'>
                <div className='flex flex-col items-center justify-center'>
                    <p className='text-2xl'>{weatherCategory}</p>
                </div>
                <p className='text-9xl'>{weatherTemp}&#176;</p>
            </div>

            {/* Weather Details */}
            <div className='bg-black/50 relative p-8 rounded-md'>
                <p className='text-2xl text-center pb-6'>Weather in {cityName}</p>
                <div className='flex justify-between text-center'>
                    <div>
                        <p className='font-bold text-2xl'>{weatherFeelsLike}&#176;</p>
                        <p className='text-xl'>Feels Like</p>
                    </div>
                    <div>
                        <p className='font-bold text-2xl'>{weatherHumidity}%</p>
                        <p className='text-xl'>Humidity</p>
                    </div>
                    <div>
                        <p className='font-bold text-2xl'>{weatherWindSpeed} MPH</p>
                        <p className='text-xl'>Wind Speed</p>
                    </div>
                </div>
            </div>

        </div>
    );
};