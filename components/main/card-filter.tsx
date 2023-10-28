'use client'


export default function CardFilter({ category, setCategory }) {

    return (
        <div className="mb-8">
            <div className="flex flex-wrap justify-center md:justify-start -m-1.5">
                <button className={`relative font-medium text-gray-800 text-sm pl-3 pr-1.5 py-1.5 border rounded-full inline-flex m-1.5 ${category === '0' ? 'bg-blue-100 border-blue-300' : 'bg-white border-gray-200'}`} onClick={() => setCategory('0')}>
                    <div className="flex items-center justify-center">
                        <span>View All</span>
                        <span className={`text-xs font-semibold px-1 py-px rounded-full ml-2 ${category === '0' ? 'text-white bg-blue-300' : 'text-gray-400 bg-gray-100'}`}>2.7K</span>
                    </div>
                </button>
                <button className={`relative font-medium text-gray-800 text-sm pl-3 pr-1.5 py-1.5 border rounded-full inline-flex m-1.5 ${category === '1' ? 'bg-blue-100 border-blue-300' : 'bg-white border-gray-200'}`} onClick={() => setCategory('1')}>
                    <div className="flex items-center justify-center">
                        <span>Illustration</span>
                        <span className={`text-xs font-semibold px-1 py-px rounded-full ml-2 ${category === '1' ? 'text-white bg-blue-300' : 'text-gray-400 bg-gray-100'}`}>1.2K</span>
                    </div>
                </button>
                <button className={`relative font-medium text-gray-800 text-sm pl-3 pr-1.5 py-1.5 border rounded-full inline-flex m-1.5 ${category === '2' ? 'bg-blue-100 border-blue-300' : 'bg-white border-gray-200'}`} onClick={() => setCategory('2')}>
                    <div className="flex items-center justify-center">
                        <span>Branding</span>
                        <span className={`text-xs font-semibold px-1 py-px rounded-full ml-2 ${category === '2' ? 'text-white bg-blue-300' : 'text-gray-400 bg-gray-100'}`}>1.4K</span>
                    </div>
                </button>
                <button className={`relative font-medium text-gray-800 text-sm pl-3 pr-1.5 py-1.5 border rounded-full inline-flex m-1.5 ${category === '3' ? 'bg-blue-100 border-blue-300' : 'bg-white border-gray-200'}`} onClick={() => setCategory('3')}>
                    <div className="flex items-center justify-center">
                        <span>Product Design</span>
                        <span className={`text-xs font-semibold px-1 py-px rounded-full ml-2 ${category === '3' ? 'text-white bg-blue-300' : 'text-gray-400 bg-gray-100'}`}>1.7K</span>
                    </div>
                </button>
                <button className={`relative font-medium text-gray-800 text-sm pl-3 pr-1.5 py-1.5 border rounded-full inline-flex m-1.5 ${category === '4' ? 'bg-blue-100 border-blue-300' : 'bg-white border-gray-200'}`} onClick={() => setCategory('4')}>
                    <div className="flex items-center justify-center">
                        <span>Typography</span>
                        <span className={`text-xs font-semibold px-1 py-px rounded-full ml-2 ${category === '4' ? 'text-white bg-blue-300' : 'text-gray-400 bg-gray-100'}`}>989</span>
                    </div>
                </button>
            </div>
        </div>
    )
}