
import dbConnect, { collectionDbNameObj } from '@/app/lib/dbConnect';
import { ObjectId } from 'mongodb';
import Image from 'next/image';

const ServicesDetailsPage = async ({ params }) => {
    const p = await params;
    const servicesCollection = dbConnect(collectionDbNameObj.servicesCollectionName);
    const data = await servicesCollection.findOne({ _id: new ObjectId(p) });
    
    // note: main ui component
    return (
        <div className="w-full">
            {/* service details banner section */}
            <section className='w-full'>
                <figure className='w-full relative'>
                    <Image
                        src={"/assets/images/checkout/checkout.png"}
                        width={500}
                        height={300}
                        alt="hero"
                        className='w-full'
                    />
                    {/* overlay and text */}
                    <div className='absolute top-0 left-0 w-full h-full bg-black/40'>
                        {/* text */}
                        <h3 className='text-white ps-20 flex items-center h-full font-semibold text-4xl'>Service Details</h3>
                    </div>
                </figure>
            </section>

            {/* service details content */}
            <div className='w-full mt-4'>
                <figure>
                    <Image
                        src={data.img}
                        width={500}
                        height={300}
                        alt={data.title}
                    />
                </figure>
                {/* service title */}
                <p className='text-3xl font-semibold mt-5'>{data.title}</p>
            </div>
        </div>
    );
};
export default ServicesDetailsPage;