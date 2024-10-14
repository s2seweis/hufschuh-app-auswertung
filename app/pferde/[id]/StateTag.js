import styled from "styled-components"
import React from "react"
import colors from "../../../constants/colors"
import { spacing } from "../../../constants/spacing"
import borderRadius from "../../../constants/borderRadius"

const Tag = styled.span`
  text-align: center;

  padding: ${spacing.space3xs} ${spacing.space2xs};
  border-radius: ${borderRadius.large};
  width: ${spacing.space2xl};

  &.false {
    color: white;
    background-color: darkgreen;
  }

  &.true {
    color: white;
    background-color: darkred;
  }
`

export function StateTag({ state }) {
  return <Tag className={state.toString()}>{state ? "ja" : "nein"}</Tag>
}
