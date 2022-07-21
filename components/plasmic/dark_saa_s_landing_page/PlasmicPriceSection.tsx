// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 5fgC6e3xtG9mSe5XxMw1h6
// Component: RWBpS7VVQ6JKP
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import PriceCard from "../../PriceCard"; // plasmic-import: CepGBR_d__4isF/component

import { useScreenVariants as useScreenVariantspsat7WfJvDgQs } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: Psat7WFJvDGQs/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_dark_saa_s_landing_page.module.css"; // plasmic-import: 5fgC6e3xtG9mSe5XxMw1h6/projectcss
import sty from "./PlasmicPriceSection.module.css"; // plasmic-import: RWBpS7VVQ6JKP/css

export type PlasmicPriceSection__VariantMembers = {};

export type PlasmicPriceSection__VariantsArgs = {};
type VariantPropType = keyof PlasmicPriceSection__VariantsArgs;
export const PlasmicPriceSection__VariantProps = new Array<VariantPropType>();

export type PlasmicPriceSection__ArgsType = {};
type ArgPropType = keyof PlasmicPriceSection__ArgsType;
export const PlasmicPriceSection__ArgProps = new Array<ArgPropType>();

export type PlasmicPriceSection__OverridesType = {
  root?: p.Flex<"div">;
  text?: p.Flex<"div">;
};

export interface DefaultPriceSectionProps {
  className?: string;
}

function PlasmicPriceSection__RenderFunc(props: {
  variants: PlasmicPriceSection__VariantsArgs;
  args: PlasmicPriceSection__ArgsType;
  overrides: PlasmicPriceSection__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(
    () =>
      Object.assign(
        {},

        props.args
      ),
    [props.args]
  );

  const $props = args;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantspsat7WfJvDgQs()
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      {(hasVariant(globalVariants, "screen", "mobileOnly") ? true : true) ? (
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__gy5QR)}
        >
          {true ? (
            <div className={classNames(projectcss.all, sty.freeBox___0KHJg)}>
              <PriceCard
                borders={["flatLeft"]}
                className={classNames("__wab_instance", sty.priceCard__a6Rtz)}
              />
            </div>
          ) : null}

          {true ? (
            <div className={classNames(projectcss.all, sty.freeBox__qYrZ)}>
              <div className={classNames(projectcss.all, sty.freeBox___4V8S)}>
                <div
                  data-plasmic-name={"text"}
                  data-plasmic-override={overrides.text}
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text
                  )}
                >
                  {"We Recommended"}
                </div>
              </div>

              {(
                hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
              ) ? (
                <PriceCard
                  borders={["flatCenter"]}
                  className={classNames("__wab_instance", sty.priceCard__ns8Cv)}
                />
              ) : null}
            </div>
          ) : null}

          {true ? (
            <div className={classNames(projectcss.all, sty.freeBox__edCdL)}>
              <PriceCard
                borders={
                  hasVariant(globalVariants, "screen", "mobileOnly")
                    ? ["flatRight"]
                    : ["flatRight"]
                }
                className={classNames("__wab_instance", sty.priceCard__r9O6)}
              />
            </div>
          ) : null}
        </p.Stack>
      ) : null}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "text"],
  text: ["text"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  text: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPriceSection__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPriceSection__VariantsArgs;
    args?: PlasmicPriceSection__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicPriceSection__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicPriceSection__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicPriceSection__ArgProps,
          internalVariantPropNames: PlasmicPriceSection__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicPriceSection__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPriceSection";
  } else {
    func.displayName = `PlasmicPriceSection.${nodeName}`;
  }
  return func;
}

export const PlasmicPriceSection = Object.assign(
  // Top-level PlasmicPriceSection renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    text: makeNodeComponent("text"),

    // Metadata about props expected for PlasmicPriceSection
    internalVariantProps: PlasmicPriceSection__VariantProps,
    internalArgProps: PlasmicPriceSection__ArgProps
  }
);

export default PlasmicPriceSection;
/* prettier-ignore-end */
