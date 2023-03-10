import React from "react";
import {
    Routes,
    Route,
    Link,
} from 'react-router-dom';
import Component1 from "./component1";
import Component2 from "./Games/L2048";
import Component3 from "./component3";
import Buttonmain1 from "./buttons/buttonmain1";
import Buttonmain2 from "./buttons/buttonmain2";
import Buttonmain3 from "./buttons/buttonmain3";
import "./formainmenu.css";
class Menu extends React.Component {
    render() {
        const viewBox1 =[0, 0, 722.83, 419.53]
        return(
            <>
                <svg className="fon"></svg>
                <svg className="face">
                    viewBox={viewBox1}
                    <path className="st0" d="M79,335.63C23.95,311.47-5.76,239.77,7.94,178.28c20.08-90.14,141-116.26,206.52-85.62
	                 c7.86,3.67,32.08,16.18,48.85,43.97c25.97,43.01,19.14,97.89,0,134.21C231.54,331.13,151.2,367.32,79,335.63z"/>
                    <path className="st1" d="M203.35,185.22c-8.58,0-15.54-7.25-15.54-16.2c0-4.52,1.78-8.6,4.64-11.53c-7.59-5.85-16.85-9.29-26.84-9.29
	                c-25.75,0-46.63,22.79-46.63,50.91s20.88,50.91,46.63,50.91s46.63-22.79,46.63-50.91c0-5.4-0.78-10.59-2.2-15.47
	                C208.01,184.63,205.75,185.22,203.35,185.22z"/>
                    <line className="st2" x1="72.33" y1="97.28" x2="30.14" y2="27.86"/>
                    <line className="st2" x1="130.07" y1="78.77" x2="125.63" y2="2.41"/>
                    <path className="st0" d="M201.13,88.03c3.47-11.36,7.17-22.94,11.1-34.71c5.07-15.16,10.27-29.82,15.54-43.97"/>
                    <path className="st3" d="M327.75,253.64c-14.29,0-14.31,23.14,0,23.14C342.04,276.78,342.07,253.64,327.75,253.64z"/>
                    <path className="st3" d="M367.47,211.21c-14.29,0-14.31,23.14,0,23.14C381.76,234.35,381.79,211.21,367.47,211.21z"/>
                    <path className="st3" d="M414.47,261.02c-0.45-1.43-1.21-2.68-2.3-3.72c-1.01-1.13-2.2-1.93-3.57-2.39c-1.32-0.72-2.75-1.06-4.28-1
	                c-0.98,0.14-1.97,0.28-2.95,0.41c-1.88,0.55-3.51,1.54-4.9,2.98c-0.58,0.78-1.16,1.56-1.74,2.34c-1,1.8-1.51,3.75-1.52,5.84v1.56
	                c-0.06,1.59,0.26,3.08,0.96,4.46c0.45,1.43,1.21,2.68,2.3,3.72c1.01,1.13,2.2,1.93,3.57,2.39c1.32,0.72,2.75,1.06,4.28,1
	                c0.98-0.14,1.97-0.28,2.95-0.41c1.88-0.55,3.51-1.54,4.9-2.98c0.58-0.78,1.16-1.56,1.74-2.34c1-1.8,1.51-3.75,1.52-5.84v-1.56
	                C415.48,263.88,415.16,262.39,414.47,261.02z"/>
                    <path className="st4" d="M281.07,333.31c13.6-40.91,161.11-39.39,173.21,0c1.19,3.87,0.73,7,0,11.57c-5.14,32.3-40.41,67.25-82.16,69.42
	                c-44.33,2.3-85.04-32.91-91.05-67.11C280.18,342.12,279.48,338.11,281.07,333.31z"/>
                    <path className="st2" d="M280.12,341.91c58,0,88,51,88,51s24-49,87-51"/>
                    <path className="st0" d="M643.24,343.56C698.29,319.4,728,247.7,714.3,186.21c-20.08-90.14-141-116.26-206.52-85.62
	                c-7.86,3.67-32.08,16.18-48.85,43.97c-25.97,43.01-19.14,97.89,0,134.21C490.7,339.07,571.04,375.26,643.24,343.56z"/>
                    <path className="st1" d="M529.99,186.21c8.58,0,15.54-7.25,15.54-16.2c0-4.52-1.78-8.6-4.64-11.53c7.59-5.85,16.85-9.29,26.84-9.29
	                 c25.75,0,46.63,22.79,46.63,50.91s-20.88,50.91-46.63,50.91s-46.63-22.79-46.63-50.91c0-5.4,0.78-10.59,2.2-15.47
	                 C525.34,185.63,527.6,186.21,529.99,186.21z"/>
                    <line className="st2" x1="649.91" y1="105.22" x2="692.1" y2="35.8"/>
                    <line className="st2" x1="592.17" y1="86.71" x2="596.61" y2="10.35"/>
                    <path className="st0" d="M521.11,95.97c-3.47-11.36-7.17-22.94-11.1-34.71c-5.07-15.16-10.27-29.82-15.54-43.97"/>
                </svg>
                <Buttonmain1 />
                <Buttonmain2/>
                <Buttonmain3/>
                <header>

                             <Link id="link1" to='/Menu2'>Хочешь в Вышку?</Link>

                            <Link id="link2"  to='/HSE'>Играть в 2048?</Link>

                            <Link id="link3" to='/who'>Кто я такой?</Link>


                </header>
                <main>
                    <Routes>
                        <Route path='/Menu2' element={<Component1 />}/>
                        <Route path='/HSE' element={<Component2/>}/>
                        <Route path='/who' element={<Component3 />}/>
                    </Routes>
                </main>
            </>
        )
    }
}
export default Menu