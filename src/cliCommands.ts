import * as fs from 'fs';
import path from 'path';

const readFile = (filePath:string): Promise<String>=>{
    return new Promise((resolve, reject) => {
		fs.readFile(filePath, "utf-8", (err, file) => {
			if (err) reject(err);
			resolve(file);
		})});
}

export const numberOfBytes = (filePath:string)=>{
 const resolvedPath = path.resolve(filePath);   
 if(!fs.existsSync(resolvedPath)) throw new Error(`File does not exist in ${resolvedPath}`);
 const sizeInByte = fs.statSync(resolvedPath).size;
 return sizeInByte;
}

export const numberOfWords = async (filepath:string)=>{
    const resolvedPath = path.resolve(filepath);
	if (!fs.existsSync(resolvedPath)) throw new Error(`File not found ${resolvedPath}`);
	const info = await readFile(resolvedPath);
	const cleanData = info
		.replace(/[\r\n]+/g, " ")
		.replace(/\s+/g, " ")
		.trim();

	const words = cleanData.split(" ");
	return words.length;
}

export const numberOfLines = async (filePath:string)=>{
    const resolvedPath = path.resolve(filePath);
	if (!fs.existsSync(resolvedPath)) throw new Error(`File not found ${resolvedPath}`);
	const info = await readFile(resolvedPath);
	const temp = info.split("\r\n");
	return temp.length;
}

export const numberOfCharacter = async (filePath:string)=>{
    const resolvedPath = path.resolve(filePath);
	if (!fs.existsSync(resolvedPath)) throw new Error(`File not found ${resolvedPath}`);
	const info = await readFile(resolvedPath);
	const chars = info.split("");
	return chars.length;

}