
import CantusFirmus from 'cantus-firmus';

import state from './state'
import setters from './setters'
import methods from './methods'
import reducers from './reducers'
import constants from './constants'

const main = new CantusFirmus(state, {nestedSetters: true})

main.addCustomSetters(setters)
main.addMethods(methods)
main.addReducers(reducers)
main.addConstants(constants)

main.connectToLocalStorage({name: "main"})

export const MainContext = main.context;
export const MainProvider = main.createProvider();

