import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../../assets/images/WhiteLogo.png';

import Dashboard from '../../assets/images/icons/Dashboard.png';
// import DashboardActive from '../../assets/images/icons/DashboardActive.png';
import Dominios from '../../assets/images/icons/Dominios.png';
// import DominiosActive from '../../assets/images/icons/DominiosActive.png';
import Certificados from '../../assets/images/icons/Certificados.png';
// import CertificadosActive from '../../assets/images/icons/CertificadosActive.png';
import Clientes from '../../assets/images/icons/Clientes.png';
// import ClientesActive from '../../assets/images/icons/ClientesActive.png';

import { Nav } from './styles';

const Navigation: React.FC = (props) => {
    return (
        <Nav>
            <div className="logo">
                <img src={logo} alt="logo Plataforma ManageEXP" />
            </div>
            <ul className="links">
                <li>
                    <NavLink to='/' className='dashboard' activeClassName='dashboard-active'>
                        <img src={Dashboard} alt="" />
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/dominios' className='dominios' activeClassName='dominios-active'>
                        <img src={Dominios} alt="" />
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/certificados' className='certificados' activeClassName='certificados-active'>
                        <img src={Certificados} alt="" />
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/clientes' className='clientes' activeClassName='clientes-active'>
                        <img src={Clientes} alt="" />
                    </NavLink>
                </li>
            </ul>
            <div className="copy">
                &copy;
            </div>
        </Nav>
    );
};

export default Navigation;
