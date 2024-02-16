
import './firstSection.scss'
import headingImage from '../../../assets/images/heading-pages-06.jpg'
import item16 from '../../../assets/images/item-16.jpg'
import Container from 'postcss/lib/container'


export const FirstSectionAbout = () => {
    return (
        <>
        <section className='container'>

        
            <section className=''>
                <div className='headingContact h-[300px] flex justify-center items-center' style={{ backgroundImage: `url(${headingImage})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }} >
                    <h1 className='font-bold text-5xl text-white'>CONTACT</h1>
                </div>

            </section>
            <section className=' container flex max-[430px]:flex-col max-[430px]:items-center   justify-center gap-x-10 py-20 '>
                <div className='bg-black picture16 max-[430px]:h-[60vh] max-[430px]:w-[90%] lg:w-[25%] lg:px-7 ' >
                </div>
                <div className='lg:w-[50%] max-[430px]:p-5'>
                    <h1 className='text-2xl mb-5'>Our story</h1>
                    <div className='mb-5'>
                        <p>Phasellus egestas nisi nisi, lobortis ultricies risus semper nec. Vestibulum pharetra ac ante ut pellentesque. Curabitur fringilla dolor quis lorem accumsan, vitae molestie urna dapibus. Pellentesque porta est ac neque bibendum viverra. Vivamus lobortis magna ut interdum laoreet. Donec gravida lorem elit, quis condimentum ex semper sit amet. Fusce eget ligula magna. Aliquam aliquam imperdiet sodales. Ut fringilla turpis in vehicula vehicula. Pellentesque congue ac orci ut gravida. Aliquam erat volutpat. Donec iaculis lectus a arcu facilisis, eu sodales lectus sagittis. Etiam pellentesque, magna vel dictum rutrum, neque justo eleifend elit, vel tincidunt erat arcu ut sem. Sed rutrum, turpis ut commodo efficitur, quam velit convallis ipsum, et maximus enim ligula ac ligula. Vivamus tristique vulputate ultricies. Sed vitae ultrices orci.
                        </p>
                    </div>
                    <div className='border-l-2 ps-7 ms-3'>
                        <p>Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn't really do it, they just saw something. It seemed obvious to them after a while.</p>
                        <p className='mt-4'>- Steve Job’s</p>
                    </div>
                </div>
            </section>

            </section>
        </>
    )
}
