
export const Log =async (value:any) => {
    console.log("\x1b[5m") ;
    console.log("\x1b[1m", value) ;
     console.log("\x1b[0m") ;
}

export const errorLog =async (value:any) => {
    console.log("\x1b[31m", value) ;
    console.log("\x1b[0m") ;

}