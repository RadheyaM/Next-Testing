import {promises as fs} from 'fs';

const getCustomers = async () => {
    return fs.readFile(process.cwd() + '/data/customers.json', 'utf-8');
}

export default getCustomers;