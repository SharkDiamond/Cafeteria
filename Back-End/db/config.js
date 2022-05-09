const mongoose=require("mongoose");



const dbConection=async()=>{

    try { 
//usecreateindex, usefindandmodify
     
      await mongoose.connect(`mongodb+srv://GabrielTiburon:wwwaaa12@cluster0.8kyiy.mongodb.net/Cafe?retryWrites=true&w=majority`,{
        useNewUrlParser:true,
        useUnifiedTopology:true
      });

      console.log('BASE DE DATOS ONLINE');

    } catch (error) {
        
        throw new Error("error a la hora de iniciar la base de datos "+error.message);


    }


}

module.exports={

    dbConection



}

