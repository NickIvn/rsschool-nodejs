import { getCurrentDir } from "../helpers/index.js"

export async function handleUp () {
    try{
        process.chdir('..')
        getCurrentDir()
    } catch(error) {
        console.error('Operation failed')  
    }
}