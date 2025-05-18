import React from "react";
import styles, { layout } from "../style";
import { clients } from "../constants";

const Clients = () => {
  return (
    <section
      id="clients"
      className={`flex flex-wrap ${styles.paddingX} md:gap-[100px] gap-8 justify-center  items-center ${styles.paddingY}`}
    >
      {clients.map((client) => (
        <img
          src={client.logo}
          alt="Client"
          key={client.id}
          className="w-[192px] h-[60px] object-contain"
        />
      ))}
    </section>
  );
};

export default Clients;
