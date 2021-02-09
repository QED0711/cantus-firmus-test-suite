
import CantusFirmus from 'cantus-firmus';

import state from './state'
import setters from './setters'
import methods, {namespacedMethods} from './methods'
import reducers from './reducers'
import constants from './constants'

const main = new CantusFirmus(state, {nestedSetters: true})

main.ignoreSetters(["ignoreMe", ["nested", "ignoreMeToo"]])
main.ignoreGetters(["ignoreMe", ["nested", "ignoreMeToo"]])


main.addCustomSetters(setters)


main.addMethods(methods)
main.addNamespacedMethods(namespacedMethods)

main.addReducers(reducers)
main.addConstants(constants)


main.connectToLocalStorage({name: "main", subscriberWindows: ["child", "grandchild"]})

export const MainContext = main.context;
export const MainProvider = main.createProvider();

