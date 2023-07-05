import React, { useContext, useState } from "react";
import Form from "react-bootstrap/Form";
// import { currancycontext } from "./currancycontext";
import { usersidcontext } from "./usecontext";

const Currancy = () => {
  // const [currancyvalue, setcurrancyvalue] = useState();
  const { chagecurrancyvalue } = useContext(usersidcontext);
  const getcurrent = (e) => {
    // setcurrancyvalue(e.target.value);
    const value = e.target.value;
    chagecurrancyvalue(value);
    // console.log(value);
  };
  // console.log(currancyvalue);
  // console.log(currancyvalue);
  return (
    <>
      <Form.Select onChange={getcurrent} aria-label="Default select example">
        <option value="AFN">AFN</option>
        <option value="AED">AED</option>
        <option value="ALL">ALL</option>
        <option value="AMD">AMD</option>
        <option value="ANG">ANG</option>
        <option value="AOA">AOA</option>
        <option value="AUD">AUD</option>
        <option value="AWG">AWG</option>
        <option value="AZN">AZN</option>
        <option value="BAM">BAM</option>
        <option value="BBD">BBD</option>
        <option value="BDT">BDT</option>
        <option value="BGN">BGN</option>
        <option value="BHD">BHD</option>
        <option value="BIF">BIF</option>
        <option value="BMD">BMD</option>
        <option value="BND">BND</option>
        <option value="BOB">BOB</option>
        <option value="BRL">BRL</option>
        <option value="BSD">BSD</option>
        <option value="BWP">BWP</option>
        <option value="BZD">BZD</option>
        <option value="CAD">CAD</option>
        <option value="CDF">CDF</option>
        <option value="CHF">CHF</option>
        <option value="CLP">CLP</option>
        <option value="CNY">CNY</option>
        <option value="COP">COP</option>
        <option value="CRC">CRC</option>
        <option value="CVE">CVE</option>
        <option value="CZK">CZK</option>
        <option value="DJF">DJF</option>
        <option value="DKK">DKK</option>
        <option value="DOP">DOP</option>
        <option value="DZD">DZD</option>
        <option value="EGP">EGP</option>
        <option value="ERN">ERN</option>
        <option value="ETB">ETB</option>
        <option value="EUR">EUR</option>
        <option value="FJD">FJD</option>
        <option value="FKP">FKP</option>
        <option value="GBP">GBP</option>
        <option value="GEL">GEL</option>
        <option value="GHS">GHS</option>
        <option value="GIP">GIP</option>
        <option value="GMD">GMD</option>
        <option value="GNF">GNF</option>
        <option value="GYD">GYD</option>
        <option value="HRK">HRK</option>
        <option value="HTG">HTG</option>
        <option value="ILS">ILS</option>
        <option value="IQD">IQD</option>
        <option value="IRR">IRR</option>
        <option value="ISK">ISK</option>
        <option value="JMD">JMD</option>
        <option value="JOD">JOD</option>
        <option value="JPY">JPY</option>
        <option value="KZT">KZT</option>
        <option value="LBP">LBP</option>
        <option value="LRD">LRD</option>
        <option value="LSL">LSL</option>
        <option value="LYD">LYD</option>
        <option value="MAD">MAD</option>
        <option value="MDL">MDL</option>
        <option value="MGA">MGA</option>
        <option value="MKD">MKD</option>
        <option value="MMK">MMK</option>
        <option value="MNT">MNT</option>
        <option value="MOP">MOP</option>
        <option value="MRU">MRU</option>
        <option value="MUR">MUR</option>
        <option value="MVR">MVR</option>
        <option value="MWK">MWK</option>
        <option value="MXN">MXN</option>
        <option value="MYR">MYR</option>
        <option value="MZN">MZN</option>
        <option value="NAD">NAD</option>
        <option value="NGN">NGN</option>
        <option value="NIO">NIO</option>
        <option value="NOK">NOK</option>
        <option value="NPR">NPR</option>
        <option value="NZD">NZD</option>
        <option value="OMR">OMR</option>
        <option value="PAB">PAB</option>
        <option value="PEN">PEN</option>
        <option value="PGK">PGK</option>
        <option value="PHP">PHP</option>
        <option value="PKR">PKR</option>
        <option value="PLN">PLN</option>
        <option value="PYG">PYG</option>
        <option value="QAR">QAR</option>
        <option value="RON">RON</option>
        <option value="RUB">RUB</option>
        <option value="RWF">RWF</option>
      </Form.Select>
    </>
  );
};

export default Currancy;
