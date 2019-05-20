declare module '@rn-components-kit/divider' {

  import {SFC} from 'react';
  import React, {ViewStyle} from 'react-native'

  interface Props {

    /**
     * Allow you to custom style
     */
    style?: ViewStyle;

    /**
     * Determines the divider's color
     * default: '#DFDFDF'
     */
    color?: string;

    /**
     * Determines the divider's orientation
     * default: 'horizontal'
     */
    orientation?: 'horizontal' | 'vertical';

    /**
     * Space between two sides on cross axis
     * default: 0
     */
    margin?: number;

    /**
     * Space inside two sides on main axis
     * default: 0
     */
    padding?: number;
  }

  export const Divider: SFC<Props>;
}