import Header from "./components/Header";
import OwnerInfo from "./components/OwnerInfo";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { useState } from "react";

const UILabels = [
  {
    country: "spanish",
    ownerLabel: "Sebastian Ruiz",
    importLabel: "Importe",
    currencyLabel: "Pessos mexicanos",
    accountNumberLabel: "Número de cuenta",
    buttonLabel: "Retirada de fondos",
    clickMessage:
      "Estimado cliente, para retirar fondos necesita pagar 250.000 ARS para activar la cuenta de retiro que especificó. Una vez realizado el pago, el retiro a su cuenta especificada estará disponible.",
    geoLabel: "Cajeros automáticos",
    infoLabel: "información",
    scheduleLabel: "Horario",
  },
  {
    country: "Colombia",
    ownerLabel: "Santiago Ruiz",
    importLabel: "Importe",
    currencyLabel: "Pessos mexicanos",
    accountNumberLabel: "Número de cuenta",
    buttonLabel: "Retirada de fondos",
    clickMessage:
      "Estimado cliente, para retirar fondos necesita pagar 250.000 ARS para activar la cuenta de retiro que especificó. Una vez realizado el pago, el retiro a su cuenta especificada estará disponible.",
    geoLabel: "Cajeros automáticos",
    infoLabel: "información",
    scheduleLabel: "Horario",
  },
  {
    country: "Argentina",
    ownerLabel: "Sebastian Gonzalez",
    importLabel: "Importe",
    currencyLabel: "Pessos mexicanos",
    accountNumberLabel: "Número de cuenta",
    buttonLabel: "Retirada de fondos",
    clickMessage:
      "Estimado cliente, para retirar fondos necesita pagar 250.000 ARS para activar la cuenta de retiro que especificó. Una vez realizado el pago, el retiro a su cuenta especificada estará disponible.",
    geoLabel: "Cajeros automáticos",
    infoLabel: "información",
    scheduleLabel: "Horario",
  },
];

function App() {
  const [current, setCurrent] = useState(0);

  return (
    <div className="app">
      <Header current={current} setCurrent={setCurrent} />
      <OwnerInfo ownerName={UILabels[current].ownerLabel} current={current} />
      <Main
        nameForInput={UILabels[current].importLabel}
        nameForCurrency={UILabels[current].currencyLabel}
        nameAccountNumber={UILabels[current].accountNumberLabel}
        nameButton={UILabels[current].buttonLabel}
        clickMessage={UILabels[current].clickMessage}
        current={current}
      />

      <Footer
        geoLabel={UILabels[0].geoLabel}
        infoLabel={UILabels[0].infoLabel}
        scheduleLabel={UILabels[0].scheduleLabel}
      />
    </div>
  );
}
export default App;
