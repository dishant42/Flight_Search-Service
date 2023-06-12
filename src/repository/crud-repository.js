class CrudRepository{
    constructor(model){
        this.model=model;
    }

    async create(data){
        try {
            const result=await this.model.create(data);
            return result;
        } catch (error) {
            console.log("there is error in crud repository")
            throw(error);
        }
    }

    async delete(modelID){
        try {
            const result=await this.model.destroy({
                where:{
                    id:modelID
                }
            })
            return true;
        } catch (error) {
            console.log("there is error in crud repository")
            throw(error);
        }
    }

    async update(modelID,data){
        try {
            const result=await this.model.update(data,{
                where:{
                    id:modelID
                }
            })
            return result;
        } catch (error) {
            console.log("there is error in crud repository")
            throw(error);
        }
    }

    async get(modelID){
        try {
            const result=await this.model.findByPk(modelID);
            return result;
        } catch (error) {
            console.log("there is error in crud repository")
            throw(error);
        }
    }

    async getall(){
        try {
            const result=await this.model.findAll();
            return result;
        } catch (error) {
            console.log("there is error in crud repository")
            throw(error);
        }
    }
}

module.exports=CrudRepository;