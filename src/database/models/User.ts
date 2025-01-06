import {
    Table,
    Column,
    Model,
    DataType,
    CreatedAt,
    PrimaryKey
} from 'sequelize-typescript'

@Table({
    tableName : 'users',
    modelName : 'User',
    timestamps : true
})

// tablename k hunxa typ set gareko  ho ani tyo chai haleko ho typ chai sql admin me dkhinxa

export default class User extends Model{
    @Column({
        primaryKey : true,
        type : DataType.UUID,
        defaultValue : DataType.UUIDV4
    })
    declare id:string

    @Column({
        type : DataType.STRING
    })
    declare username:string

    @Column({
        type : DataType.STRING
    })
    declare email:string
    
    @Column({
        type : DataType.STRING
    })
    declare password:string
}
