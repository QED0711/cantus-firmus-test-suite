
// import CantusFirmus from 'cantus-firmus';

import state from './state'
import setters from './setters'
import methods from './methods'
import reducers from './reducers'
import constants from './constants'

const CantusFirmus = require("cantus-firmus");

const main = new CantusFirmus(state)

main.addCustomSetters(setters)
main.addMethods(methods)
main.addReducers(reducers)
main.addConstants(constants)

export const MainContext = main.context;
export const MainProvider = main.createProvider();

