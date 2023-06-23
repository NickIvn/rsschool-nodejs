import { getCurrentDir } from "../helpers/index.js"

export const handleCd = async ([pathToDirectory]) => {
    try{
        process.chdir(pathToDirectory)
        getCurrentDir()
    } catch(err){
        console.error('Operation failed')
    }   
}
