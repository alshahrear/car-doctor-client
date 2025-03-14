import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";


const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('Services.json')
        .then(res => res.json())
        .then(data => setServices(data));
    }, [])
    return (
        <div className="mt-4 mb-4">
            <div className="text-center space-y-4">
            <h3 className="text-3xl font-bold text-orange-500">Service</h3>
            <h3 className="text-5xl">Our Service Area</h3>
            <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-3 gap-6">
                {
                    services.map(service => <ServicesCard
                    key={service._id}
                    service={service}
                    ></ServicesCard>)
                }
            </div>
        </div>
    );
};

export default Services;