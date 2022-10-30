import React, { PropsWithChildren } from "react";
import { Body1Text } from "../atoms/Texts";
import { LoaderIcon } from "../shared/utilsIcon";

interface ContentLoaderProps {
  isLoading: boolean;
}

/**
 * Display a loading effect or its children
 * depending on its isLoading prop
 * @returns JSX.Element
 */
export const ContentLoader = (props: PropsWithChildren<ContentLoaderProps>): JSX.Element => {
  const { isLoading, children } = props;
  return <>{isLoading ? <LoaderIcon /> : <>{children}</>}</>;
};
