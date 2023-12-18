const Calculator = () => {
  return (
    <div className="bg-black text-white ">
      <div className="container mx-auto flex gap-10 py-16 md:py-28">
        <div>
          <p>CALCULATE BODY</p>
          <h1 className="text-5xl font-bold">Calculate Your BMI?</h1>
        </div>
        <div className="flex gap-2">
            <input type="text" placeholder="Weight/kg" className="p-3 bg-slate-800"/>
            <input type="text" placeholder="Height/cm" className="p-3 bg-slate-800"/>
            <button className="bg-red-600 p-3">CALCULATE</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
