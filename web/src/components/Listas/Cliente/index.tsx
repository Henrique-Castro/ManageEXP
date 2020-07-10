import React from "react";

import { 
    ClientRow,
    CompanyManager,
    DomainLink,
    ContactIcons,
    PhoneIcon,
    EmailIcon, 
} from './styles';

export interface ICliente {
  id: number;
  company: string;
  technicalManager: string;
  domainId: number;
  email: string;
  phoneNumber: string;
}

export interface ClienteProps {
  data: ICliente[];
}

const Cliente = ({ data }: ClienteProps) => {
  let linhas = data.map((item) => (
    <ClientRow>
      <td className="company">{item.company}</td>
      <td>
        <CompanyManager>
          <strong>Renan</strong>
          <span>emalil@teste.com</span>
        </CompanyManager>
      </td>
      <td>
        <DomainLink>teste.com.br</DomainLink>
      </td>
      <td>
        <ContactIcons>
          <PhoneIcon />
          <EmailIcon />
        </ContactIcons>
      </td>
    </ClientRow>
  ));

  return <tbody>{linhas}</tbody>;
};

export default Cliente;
