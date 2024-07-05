import Header from "./Header";
import Hero from "./Hero";
import Services from "./Event";
import About from "./About";
import Location from "./Location";
import Comment from "./Comment";
import FieldMain from "./FieldMain";
import Field  from "./Field";


export default function Detail(){
    return(
        <>
        <Header/>
        <Hero/>
        <Services/>
        <FieldMain/>
        {/* <About/> */}
        <Field/>
        <Location/>
        <Comment/>
        </>
    );
}