import {getRepository} from 'typeorm';
export function items() {
  return getRepository('Item')
}
export function lists() {
  return getRepository('List')
}

export function getById(repo, id) {
  return repo().findOne(id)
}