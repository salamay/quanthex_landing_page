import React from "react";
import tradeScreen from "../../assets/img/screen-trade.webp";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import CheckList from "./components/CheckList";

function Showcase() {
  return (
    <>
      {/* Trade */}
      <section className="relative overflow-hidden py-20 sm:py-28">
        <div className="container-page grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Cross-chain trade"
              title="Swap in seconds, with nothing hidden"
              body="Pick a network, choose what you're swapping and see the live rate and minimum received before you confirm. Max fills your full balance in one tap."
            />
            <CheckList
              items={[
                "Swap between BNB, USDT and more on supported networks",
                "Live swap rate and minimum received shown up front",
                "Adjustable slippage settings for more control",
              ]}
            />
          </Reveal>

          <Reveal className="relative">
            <div className="relative mx-auto h-[460px] max-w-[520px] overflow-hidden rounded-[36px] bg-gradient-to-br from-brand-600 via-brand-700 to-brand-800 sm:h-[540px]">
              <div
                aria-hidden="true"
                className="absolute inset-y-0 left-1/3 w-px opacity-40"
                style={{
                  backgroundImage: "linear-gradient(to bottom, #fff 50%, transparent 50%)",
                  backgroundSize: "1px 14px",
                  transform: "skewX(-14deg)",
                }}
              />
              <img
                src={tradeScreen}
                alt="Trade screen swapping BNB to USDT on BSC with swap rate and minimum received"
                className="absolute left-[22%] top-10 w-[300px] drop-shadow-[0_30px_40px_rgba(28,8,36,0.45)] sm:left-[26%] sm:w-[340px]"
                width="560"
                height="1107"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

export default Showcase;
