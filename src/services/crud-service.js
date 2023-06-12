class CrudService{
    constructor(repository){
        this.repository=repository;
    }

    async create(data){
        try {
            const response=await this.repository.create(data);
            return response;
        } catch (error) {
            console.log("something went wrong in crud service");
            throw(error);
        }
    }

    async delete(id){
        try {
            const response=await this.repository.destroy(id);
            return response;
        } catch (error) {
            console.log("something went wrong in crud service");
            throw(error);
        }
    }

    async get(){
        try {
            const response=await this.repository.get(id);
            return response;
        } catch (error) {
            console.log("something went wrong in crud service");
            throw(error);
        }
    }

    async getall(){
        try {
            const response=await this.repository.getall();
            return response;
        } catch (error) {
            console.log("something went wrong in crud service");
            throw(error);
        }
    }

    async update(id,data){
        try {
            const response=await this.repository.update(id,data);
            return response;
        } catch (error) {
            console.log("something went wrong in crud service");
            throw(error);
        }       
    }
}

module.exports=CrudService