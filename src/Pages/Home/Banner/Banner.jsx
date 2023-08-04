import banner from '../../../assets/images/banner.png'
import img1 from '../../../assets/images/img1.png';
import img2 from '../../../assets/images/img2.png';
import img3 from '../../../assets/images/img3.png';
import img4 from '../../../assets/images/img4.png';

const Banner = () => {
    return (
        <div className='relative mb-36'>
            <div className=''>
                <img className='w-full' src={banner} alt="" />
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:absolute bottom-[-100px] text-white left-14 right-14'>
                    <div className='relative'>
                        <img className='opacity-70' src={img1} alt="" />
                        <div className='absolute top-0 pt-6 pl-6 bg-slate-900 opacity-60 w-full h-full'>
                            <h4 className='text-orange-600'>HEALTHY FOOD</h4>
                            <h2 className='text-2xl my-2 font-bold'>HEALTHY FOOD</h2>
                            <h2><span className='text-2xl font-bold'>-8KG</span>/<span className='text-orange-600 '>MONTH</span></h2>
                        </div>
                   </div>
                    <div className='relative'>
                        <img src={img2} alt="" />
                        <div className='absolute top-0 pt-6 pl-6 bg-slate-900 bg-blend-multiply opacity-60  w-full h-full'>
                            <h4 className='text-orange-600'>FRESH FOOD</h4>
                            <h2 className='text-2xl my-2 font-bold'>FRESH FOOD</h2>
                            <h2><span className='text-2xl font-bold'>-4KG</span>/<span className='text-orange-600 '>MONTH</span></h2>
                        </div>
                   </div>
                    <div className='relative'>
                        <img src={img3} alt="" />
                        <div className='absolute top-0 pt-6 pl-6 bg-slate-900 bg-blend-multiply opacity-60  w-full h-full'>
                            <h4 className='text-orange-600'>DIET FOOD</h4>
                            <h2 className='text-2xl my-2 font-bold'>DIET FOOD</h2>
                            <h2><span className='text-2xl font-bold'>-12KG</span>/<span className='text-orange-600 '>MONTH</span></h2>
                        </div>
                   </div>
                    <div className='relative'>
                        <img src={img4} alt="" />
                        <div className='absolute top-0 pt-6 pl-6 bg-slate-900 bg-blend-multiply opacity-60  w-full h-full'>
                            <h4 className='text-orange-600'>ORGANIC FOOD</h4>
                            <h2 className='text-2xl my-2 font-bold'>ORGANIC FOOD</h2>
                            <h2><span className='text-2xl font-bold'>-18KG</span>/<span className='text-orange-600 '>MONTH</span></h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;