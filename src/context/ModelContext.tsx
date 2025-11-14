"use client";

import React, { createContext, useState, useContext } from "react";

type ModelContextType = {
  isOpen: boolean;
  openModel: () => void;
  closeModel: () => void;
};

const ModelContext = createContext<ModelContextType | undefined>(undefined);

export const ModelProvider = ({ children }: { children: React.ReactNode }) => {
  {
    const [isOpen, setIsOpen] = useState(false);

    const openModel = () => setIsOpen(true);
    const closeModel = () => setIsOpen(false);

    return (
      <ModelContext.Provider value={{ isOpen, openModel, closeModel }}>
        {children}
      </ModelContext.Provider>
    );
  }
};

export const useInputModel = () => {
  const context = useContext(ModelContext);
  if (context === undefined) {
    throw new Error("useModel must be used within a ModelProvider");
  }
  return context;
};
