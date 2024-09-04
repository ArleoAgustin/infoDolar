import React, { useState } from "react";
import Modal from "react-modal";
import style from "./Calculator.module.css";
import { IconCalculator } from "@tabler/icons-react";
import DataProvider from "../Api/ApiDataProvider";
import InputCalculator from "./inputCalculator/InputCalculator";
import { useMediaQuery } from "react-responsive";

// Establecer el root del modal
Modal.setAppElement("#root");

function Calculator() {
  const [isOpen, setIsOpen] = useState(false);
  const [amount, setAmount] = useState("");

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(event.target.value);
  };

  const dolaresOut = ["Bolsa", "Mayorista", "Tarjeta"];

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <>
      {isMobile ? (
        <div className={style.textIcon}>

          <h5 onClick={handleOpenModal} className={style.textCalaculadora}>Calculadora</h5>
        </div>
      ) : (
        <button onClick={handleOpenModal} className={style.button}>
          <IconCalculator width="30" height="25" />
        </button>
      )}
      <Modal
        isOpen={isOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Calculadora"
        className={style.modal}
        overlayClassName={style.overlay} // Asegúrate de que esta clase esté aplicada
      >
        <div className={style.containerClose}>
        <button onClick={handleCloseModal} className={style.closeButton}>
          X
        </button>
        </div>
        <div className={style.modalContent}>
          <h2>Calculadora</h2>
          <input
            type="number"
            placeholder="Ingrese la cantidad en dólares"
            value={amount}
            onChange={handleAmountChange}
            className={style.input}
          />

          <p className={style.textConvert}>Convertir de dólar a peso</p>

          <DataProvider>
            {(data, loading, error) => {
              if (loading) return <p>Cargando datos...</p>;
              if (error) return <p>Error: {error}</p>;

              const amountNumber = parseFloat(amount);

              return (
                <div className={style.containerInput}>
                  {data
                    .filter((dolar) => !dolaresOut.includes(dolar.nombre))
                    .map((dolar, index) => {
                      const compraResult = isNaN(amountNumber)
                        ? 0
                        : amountNumber * dolar.compra;
                      const ventaResult = isNaN(amountNumber)
                        ? 0
                        : amountNumber * dolar.venta;

                      return (
                        <InputCalculator
                          key={index}
                          nombre={dolar.nombre}
                          compra={compraResult}
                          venta={ventaResult}
                        />
                      );
                    })}
                </div>
              );
            }}
          </DataProvider>
        </div>
      </Modal>
    </>
  );
}

export default Calculator;
