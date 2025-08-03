import Link from "next/link";
import dbConnect, { collectionDbNameObj } from "../lib/dbConnect";

const ServiceSection = async () => {

    const servicesCollection = dbConnect(collectionDbNameObj.servicesCollectionName);
    const servicesData = await servicesCollection.find({}).toArray();
    console.log(servicesData)

    return (
        <div className="w-full">
            <div className="grid w-full grid-cols-3 gap-6">
                {
                    servicesData?.map(item => {
                        return (
                            <div key={item._id} className="w-full border border-[#E8E8E8] rounded-[10px] p-6 flex flex-col items-start gap-5">
                                {/* img */}
                                <figure className="w-full h-[208px]">
                                    <img className="w-full h-full" src={item.img} alt="" />
                                </figure>
                                {/* title */}
                                <h2 className="text-xl font-semibold">{item.title}</h2>
                                {/* price */}
                                <div className="flex items-center justify-between text-[#FF3811] w-full">
                                    <h2 className="text-xl font-semibold"> <span>Price: </span> ${item.price}</h2>
                                    <Link href={`/services/${item._id}`}>icon</Link>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};
export default ServiceSection;