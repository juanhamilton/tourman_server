function getFilePath(file){
    let separador
    const filePath = file.path;    
    if(filePath.indexOf("\\")>0) {
        separador = "\\";
    } else {
        separador = "/";
    }
console.log(file);
    const fileSplit = filePath.split(separador);
console.log(fileSplit);
    return `${fileSplit[1]}/${fileSplit[2]}`;

}

module.exports = {
    getFilePath,

}