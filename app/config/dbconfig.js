module.exports =  {
    HOST: "salt.db.elephantsql.com(salt-01)" ,
    USER: "uhmanyeh", 
    PASSWORD: "jyWN7y4tjWMidQOuwrWmYjewroTClrcg",
    DB: "uhmanyeh",
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire:30000,
        idle: 10000
    }
};