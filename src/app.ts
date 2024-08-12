import {Command} from 'commander';
import { numberOfBytes, numberOfCharacter, numberOfLines, numberOfWords } from './cliCommands.js';
const program = new Command();

program
  .name("ccwc")
  .description("Word Counter CLI App.")
  .version("0.1.0")

program
.command("count")
.description("Count words based on passed options")
.option("-b, --bytes <filepath>","number of bytes of the file")
.option("-l, --lines <filepath>", "number of lines in the file")
.option("-w, --words <filepath>", "total word counts in the file")
.option("-c, --chars <filepath>", "number of characters available in the file")
.argument("<filepath>", "path to the file in question")
.action( async (filePath,options)=>{
    try {
        const flags = Object.keys(options).filter((flag)=> options[flag]);
        if(flags.length === 0 && filePath){
            const [lines, words, chars, bytes] = await Promise.all([
                numberOfLines(filePath),
                numberOfWords(filePath),
                numberOfCharacter(filePath),
                numberOfBytes(filePath),
            ]);
            console.log(
                `Number of lines: ${lines} Number of words: ${words} Number of characters: ${chars} Number of bytes: ${bytes}`
            );

        }

    } catch (error) {
        console.error(error);
    }

})

program.parse(process.argv);