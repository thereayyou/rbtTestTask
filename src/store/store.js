import Vue from "vue";
import Vuex from "vuex";
import {evaluate} from "mathjs";

Vue.use(Vuex)

export const getFromLocalStorageByKey = (key) => JSON.parse(localStorage.getItem(key)) || []
export const setItemtoLocalStorage = (value) => {
    const operationsFromLocalStorage = getFromLocalStorageByKey("operations")
    const operations = [...operationsFromLocalStorage, value]
    localStorage.setItem('operations', JSON.stringify(operations));
}

export default new Vuex.Store({
    actions: {},
    mutations: {
        updateText(state, text) {
            state.result = text
        },
        calculatedFunc: function (state, x) {
            if (Number.isInteger(x)) {
                state.result = state.result.toString()
                state.result += x;
            } else {
                switch (x) {
                    case '+':
                        state.result += x;
                        break;
                    case '-':
                        state.result += x;
                        break;
                    case '*':
                        state.result += x;
                        break;
                    case '/':
                        state.result += x;
                        break;
                    case '.':
                        state.result += x;
                        break;
                    case '=':
                        state.finalResult = this.state.result + '=';
                        console.log(this.state.result)
                        state.result = evaluate(state.result);
                        state.finalResult += this.state.result;
                        setItemtoLocalStorage({
                            date: `${new Date().toJSON().slice(0, 10).replace(/-/g, '/')} ${(new Date()).toLocaleTimeString()}`,
                            value: this.state.finalResult
                        });
                        break;
                    case 'AC':
                        state.finalResult = '';
                        state.result = ''
                        break;
                }
            }
        }
    },
    state: {
        result: '',
        calcElements: [{style: {color: "black"}, value: 7},
            {style: {color: "black"}, value: 8},
            {style: {color: "black"}, value: 9},
            {style: {backgroundColor: "orange"}, value: "AC"},
            {style: {color: "black"}, value: 4},
            {style: {color: "black"}, value: 5},
            {style: {color: "black"}, value: 6},
            {style: {backgroundColor: "orange"}, value: "/"},
            {style: {color: "black"}, value: 1},
            {style: {color: "black"}, value: 2},
            {style: {color: "black"}, value: 3},
            {style: {backgroundColor: "orange"}, value: "*"},
            {style: {color: "black"}, value: "."},
            {style: {color: "black"}, value: 0},
            {style: {color: "black"}, value: "-"},
            {style: {backgroundColor: "orange"}, value: "+"},
            {style: {backgroundColor: "orange", width: "350px"}, value: "="},
        ],
        finalResult: '',
    },
    getters: {
        resultFunc(state) {
            return state.result;
        },
        calcElementsFunc(state) {
            return state.calcElements;
        },
        finalResultFunc(state) {
            return state.finalResult;
        }
    },
})
