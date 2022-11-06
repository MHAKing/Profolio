const {
    GraphQLString,
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLList
}=require("graphql")

const students=require("./db")
const Data=new GraphQLObjectType({
    name:"Data",
    fields:{
        title:{type:GraphQLString},
        roll:{type:GraphQLString},
        class_name:{type:GraphQLString},
        school:{type:GraphQLString},
        phone:{type:GraphQLString},
    }
})

const Fetch=new GraphQLObjectType({
    name:"fetch_data",
    fields:{
        Fdata:{
            type:new GraphQLList(Data),
            args:{

            },
            resolve(parent,args){
                const Data=students.find()
                return Data
            }
        }
    }
})

const mutation=new GraphQLObjectType({
    name:"datastore",
    fields:{
        Datamut:{
            type:Data,
            args:{
                title:{type:GraphQLString},
                roll:{type:GraphQLString},
                class_name:{type:GraphQLString},
                school:{type:GraphQLString},
                phone:{type:GraphQLString},
            },
            resolve(parent,args){
                const Data=new students({
                title:args.title,
                roll:args.roll, 
                class_name:args.class_name,
                school:args.school,
                phone:args.phone,
                })
                Data.save()
                console.log(Data)
                return Data
            }
        }
    }
})


module.exports=new GraphQLSchema({query:Fetch,mutation:mutation})