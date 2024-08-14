# wc-tool 

## How to configure

1. Install all packages by running `npm i` | `yarn install` | `pnpm install`
   
| Command | Description|
|---------|------------|
| `npx ccwc help` | Displays all the commands and options available|
| `npx ccwc help count` | Displays all the arguments and options available for the count command|
| `npx ccwc count <filepath>` | Displays total bytes, character, number of lines and words available in the given file|
| `npx ccwc count -l --lines <filepath>` | Displays the total number of lines available in the file| 
| `npx ccwc count -b --bytes <filepath>` | Displays the total number of bytes available in the file| 
| `npx ccwc count -c --chars <filepath>` | Displays the total number of characters available in the file| 
| `npx ccwc count -w --words <filepath>` | Displays the total number of words available in the file| 