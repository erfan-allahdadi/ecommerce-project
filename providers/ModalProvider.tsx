"use client";

import React, { useEffect, useState } from "react";

import StoreModal from "@/components/modals/StoreModal";

function ModalProvider() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return <StoreModal />;
}

export default ModalProvider;
