import {getConnection} from 'typeorm';
import { List } from '../../entities'
import { generateControllers} from '../utils'

const model = getConnection().getRepository(List)

export default generateControllers(model)