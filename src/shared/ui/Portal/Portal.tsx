import { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  children: ReactNode;
  element?: HTMLElement;
}

export const Portal = ({ children, element }: PortalProps) => {
  const [container, setContainer] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const appElement = element || document.querySelector(".app") || document.body;
    setContainer(appElement as HTMLElement);
  }, [element]);

  if (!container) return null;

  return createPortal(children, container);
};
