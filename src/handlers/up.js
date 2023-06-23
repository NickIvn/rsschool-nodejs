import { getCurrentDir } from "../helpers/index.js"

export const handleUp = async () => {
    try{
        process.chdir('..')
        getCurrentDir()
    } catch(error) {
        console.error('Operation failed')  
    }
}