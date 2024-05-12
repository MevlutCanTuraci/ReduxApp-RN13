/* eslint-disable prettier/prettier */
import {Button, SafeAreaView, Text} from 'react-native';
import {createStore} from 'redux';
import {Provider, useDispatch, useSelector} from 'react-redux';

//State'ler burada tanımlanır.
const initialState = {
  counter: 0,
};

//State durumları burada güncellenir. Bir type değeri ile kontrol edilir.
function reducers(state, action) {

    switch (action.type) {
        case "UPDATE_COUNTER_UP":
            return { ...state, counter: state.counter + 1 }
            break;

        case "UPDATE_COUNTER_DOWN":
            return { ...state, counter: state.counter - 1 }
            break;

        default:
            return state;
            break;
    }

}

// eslint-disable-next-line no-undef
export default ReduxStep1 = () => {

    const store = createStore(reducers, initialState);

    const store2 = createStore(
        (state, action) => {
            switch (action.type) {
                case "UPDATE_COUNTER_UP":
                    return {...state, counter: state.counter + 1 }
                    break;

                case "UPDATE_COUNTER_DOWN":
                    return {...state, counter: state.counter - 1 }
                    break;

                default:
                    return {...state};
                    break;
            }
        },
        {
            counter: 0
        }
    );

  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <Provider store={store2}>
            <SafeAreaView style={{ flex: 1 }}>
                <First />
                <Second />
            </SafeAreaView>
        </Provider>

    )
};


const First = () => {

    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();

    const handleUpdateCounter = () => {
        dispatch({type: "UPDATE_COUNTER_UP"});
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#bdedff' }}>
            <Text style={{ fontSize: 30 }}>
                First: {counter}
            </Text>
            
            <Button title="Update up" onPress={handleUpdateCounter} />
        </SafeAreaView>
    )

};

const Second = () => {

    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();

    const handleUpdateCounter = () => {
        dispatch({type: "UPDATE_COUNTER_DOWN"});
    }


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Text style={{ fontSize: 30 }}>
                Second: {counter}
            </Text>

            <Button title="Update down" onPress={handleUpdateCounter} />
        </SafeAreaView>
    )

}