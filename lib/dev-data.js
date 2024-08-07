import {promises as fs} from 'fs';

const getData = async (name) => {
    return fs.readFile(process.cwd() + `/data/${name}.json`, 'utf-8');
}

export default getData;