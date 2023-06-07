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

    async deletecity(cityId){
        try {
            const response= this.cityrepository.deleteCity(cityId);
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

    async getallcities(){
        try {
            const cities=await this.cityrepository.getallcities();
            return cities;
        } catch (error) {
            console.log("something error has occurred in service layer");
            throw{error}
        }
    }


}


module.exports=CityService;