import {useAppDispatch, useAppSelector} from "./store/store";
import {decrement, increment, incrementByAmount} from "./store/authSlice";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";

function App() {
    const value = useAppSelector(state => state.auth.value);
    const dispatch = useAppDispatch();

    return (
        <div>
            <Header/>
            <Content/>
            <Footer/>
        </div>
    );
}

export default App
