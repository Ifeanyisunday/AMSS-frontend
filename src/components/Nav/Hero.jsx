import dashboard from '../images/dashboard.jpg'

const Hero = () => {
    return (
        <>
            <section className="bg-white-600 text-black-900">
                <div className="container mx-auto px-4 py-20 text-center">

                    <div className='flex '>
                        <div className='flex-1 text-center md:text-left'>
                            <h2 className="text-4xl font-bold mb-4">Scale your Business and Take Control of Your Finances</h2>
                        </div>
                        <div>
                            <img src={dashboard} alt="" className='w-80 h-60 '/>
                        </div>
                    </div>

                    <p className="mb-6 text-lg">Effortlessly manage your budget, track expenses, and plan for the future.</p>
                    <button className="bg-blue-500 text-white px-6 py-3 rounded font-medium hover:bg-gray-200">
                        Get Started
                    </button>
                </div>
            </section>

        </>
    )
}

export default Hero