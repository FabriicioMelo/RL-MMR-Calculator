import * as fs from "node:fs";

export default async function(app) {

    const services = fs.readdirSync("./services").filter((service) => { return (service != "index.js"); });

    console.log(services);

    for(const service of services) {
        try{
            let serviceClass = await import(`./${service}/class.js`);            
            serviceClass = new serviceClass.default();

            app.use(serviceClass.getUrl(), serviceClass);
        }
        catch(e){
            console.log(e);
        }
        
    }
    
}