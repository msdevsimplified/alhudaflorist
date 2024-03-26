"use client"
import React, { useState } from "react";
import { Tab, TabContent } from "./TabComponent";
import { tabData } from "@/utils/dummyData";
import Products from "../Products";

export const Tabs = ({ tabData, listing }) => {
  const [openTab, setOpenTab] = React.useState(1);

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-auto">
        <ul
          className="flex mb-0 list-none gap-8 flex-wrap pt-3 pb-4 flex-row justify-center"
          role="tablist"
        >
          {tabData.map((tab, i) => (
            <Tab
              key={i}
              id={tab.id}
              label={tab.label}
              openTab={openTab}
              setOpenTab={setOpenTab}
            />
          ))}
        </ul>
      </div>
      <div className="relative pt-16 px-2 flex flex-col min-w-0 break-words bg-white w-full rounded">
        <div className="flex-auto">
          <div className="tab-content tab-space">
            {tabData.map((tab) => (
              <TabContent
                key={tab.id}
                id={tab.id}
                openTab={openTab}
              >
                {
                  listing ? <Products products={tab.data} /> : (
                    <div className="border p-6">
                      <p>{tab.data}</p>
                    </div>
                  )
                }
              </TabContent>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const TabsRender = () => {
  return <Tabs tabData={tabData} />;
}
