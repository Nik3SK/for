import React from "react";
import "./ForLogoVar_1.css";
class Logo extends React.Component {
    render() {
        const viewBox2 =[0, 0, 250, 250]
        return(
            <>
                <svg id="logoloc" width="1000" height="1900"  viewBox={viewBox2} >
                    <path fill={this.props.fill} transform={this.props.transform}
                          d="M51.78,5.81L32.32,58.36l21.99,60.83H36.05L17.71,64.43h-0.73v68.03H2.45V16.03h14.53v38.58h0.73L34.1,5.81
		C34.1,5.81,51.78,5.81,51.78,5.81z"/>
                    <path fill={this.props.fill} transform={this.props.transform}
                          d="M80.08,119.18H50.91L48.5,5.81h29.04l2.41,11.62h-14.2v14.84h13.81v11.74H65.75v50.33h14.32L80.08,119.18
		L80.08,119.18z"/>
                    <path fill={this.props.fill} transform={this.props.transform}
                          d="M129.94,163.81H77.69V50.44H91.5v100.98h11.07V73.35h13.55v78.07l3.95,0.12c3.62,0.11,6.61-2.79,6.61-6.41
		V64.91l14.47-3.05l-0.25,92.3C141.24,159.64,135.89,163.99,129.94,163.81z"/>
                    <path fill={this.props.fill} transform={this.props.transform}
                          d="M153.71,132.45V96.47h-12.52l-1.74,22.34l-12.71,0.37V37.36c0-4.65,0.28-8.39,0.84-11.23
		c0.56-2.84,1.61-5.01,3.16-6.52c1.55-1.5,3.63-2.49,6.26-2.97c2.62-0.47,6-0.71,10.13-0.71c4.3,0,7.85,0.26,10.65,0.77
		c2.79,0.52,4.99,1.53,6.58,3.03c1.59,1.51,2.69,3.66,3.29,6.45c0.6,2.8,0.9,6.52,0.9,11.16v95.09h-14.84V132.45z M147.39,29.23
		c-1.29,0-2.35,0.11-3.16,0.32c-0.82,0.22-1.46,0.6-1.94,1.16c-0.47,0.56-0.77,1.38-0.9,2.45c-0.13,1.08-0.19,2.47-0.19,4.19v37.19
		h12.52V37.36c0-1.72-0.09-3.12-0.26-4.19c-0.17-1.08-0.47-1.89-0.9-2.45s-1.08-0.95-1.94-1.16
		C149.75,29.34,148.68,29.23,147.39,29.23z"/>
                </svg>

            </>
        )
    }
}
export default Logo