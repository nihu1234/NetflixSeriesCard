import seriesData from "../api/seriesData.json";
import { Seriescard } from "./Seriescard";

const Components = () => {
    return (
        <ul className="grid grid-three-cols">
            {seriesData.map((curElem) => (
                <Seriescard key = {curElem.id} curElem = {curElem} /> 
         ))}
        
        </ul>
    );
};

export default Components;

 //Named exports for Header and Footer
//export const Header = () => {
    //return <p>© Netflix Clone</p>;
//};

//export const Footer = () => {
    //return <p>© Netflix Clone</p>;
//};
