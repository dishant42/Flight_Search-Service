const{Cityrepository}=require("../repository/index");

class CityService{
    constructor(){
        this.cityrepository=new Cityrepository();
    }

    async createcity(data){
        try {
            const city= await this.cityrepository.createcity(data);
            return city;
        } catch (error) {
            console.log("something error has occurred in service layer");
            throw{error}
        }
    }

    async deletecity(cityID){
        try {
            const response= this.cityrepository.destroycity(cityID);
            return response;
        } catch (error) {
            console.log("something error has occurred in service layer");
            throw{error}
        }
    }

    async updatecity(cityID,data){
       try {
        const cityupdate= this.cityrepository.updatecity(cityID,data);
        return cityupdate;
        
       } catch (error) {
        console.log("something error has occurred in service layer");
        throw{error}
       }
        
    }

    async getcity(cityID){
        try {
            const cityget=await this.cityrepository.getcity(cityID);
            return cityget;
        } catch (error) {
            console.log("something error has occurred in service layer");
            throw{error}
        }
    }


}


module.exports=CityService;