# wc-tool 

## How to configure

1. Install all packages by running `npm i` | `yarn install` | `pnpm install`
   
| Command | Description|
|---------|------------|
| `node dist/app.js help` | Displays all the commands and options available|
| `node dist/app.js help count` | Displays all the arguments and options available for the count command|
| `node dist/app.js count <filepath>` | Displays total bytes, character, number of lines and words available in the given file|
| `node dist/app.js count -l --lines <filepath>` | Displays the total number of lines available in the file| 
| `node dist/app.js count -b --bytes <filepath>` | Displays the total number of bytes available in the file| 
| `node dist/app.js count -c --chars <filepath>` | Displays the total number of characters available in the file| 
| `node dist/app.js count -w --words <filepath>` | Displays the total number of words available in the file| 