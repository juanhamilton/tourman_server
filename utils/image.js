function getFilePath(file) {
    let separador
    const filePath = file.path;
    if (filePath.indexOf("\\") > 0) {
        separador = "\\";
    } else {
        separador = "/";
    }

    const fileSplit = filePath.split(separador);

    return `${fileSplit[1]}/${fileSplit[2]}`;

}

module.exports = {
    getFilePath,

}