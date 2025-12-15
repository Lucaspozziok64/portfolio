import React from "react";
import CardCertificates from "./CardCertificates";

const MyCertificates = ({ titulos }) => {
  return (
    <>
      <div className="container row row-cols-1 row-cols-md-2 g-4 my-2">
        {titulos.map((titulo) => (
          <CardCertificates key={titulo.id} titulo={titulo} />
        ))}
      </div>
    </>
  );
};

export default MyCertificates;
